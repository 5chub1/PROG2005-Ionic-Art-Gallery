import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonActionSheet, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonLoading, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendar, call, clipboard, colorPalette, ellipsisHorizontalCircleOutline, helpCircleOutline } from 'ionicons/icons';
import Artist from '../models/artist.model';
import { AlertService } from '../services/alert.service';
import { ArtistService } from '../services/artist.service';
import { ToastNotificationService } from '../services/toast-notification.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: 'artistDetail.page.html',
  styleUrls: ['artistDetail.page.scss'],
  standalone: true,
  imports: [IonLoading, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonChip, DatePipe, CommonModule, IonButton, IonCard, IonLabel, IonItem, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonIcon, IonButtons, IonBackButton, IonActionSheet],
})
export class ArtistDetailPage implements OnInit {
  artist: Artist | undefined = undefined;

  constructor(private artistService: ArtistService, private route: ActivatedRoute, private router: Router, private alertService: AlertService, private toastNotificationService: ToastNotificationService) {
    addIcons({ calendar, call, colorPalette, clipboard, ellipsisHorizontalCircleOutline, helpCircleOutline });
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Delete',
      role: 'destructive',
      handler: () => {
        this.deleteArtist();
      },
    },
  ];

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      handler: async () => {
        await this.alertService.renderAlert('Delete Artist', 'Are you sure you want to delete this artist?', this.alertButtons);
      },
    },
    {
      text: 'Edit',
      handler: () => {
        console.log('Edit clicked');
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
    },
  ];

  ngOnInit() {
    const artistName = this.route.snapshot.paramMap.get('name');
    if (!artistName || artistName === '') return;
    // It would be better if this endpoint would search by ID instead of name, because names are not unique.
    // This is a limitation of the API and needs some extra work to check if the artist is the correct one.
    // For now, we will assume that the artist name is unique. And we will only get the first artist in the array.
    this.artistService.getArtistByName(artistName).subscribe({
      next: (data) => {
        if (Array.isArray(data)) {
          this.artist = data[0];
        } else {
          this.artist = data;
        }
      },
      error: (error) => console.error('There was an error!', error),
    });
  }

  /**
   * Deletes the artist from the API.
   */
  deleteArtist() {
    this.artistService.deleteArtist(this.artist!.name).subscribe({
      next: () => {
        this.toastNotificationService.renderToastNotification('Artist deleted successfully', 'success');
        this.router.navigate(['/artists']);
      },
      error: (error) => {
        this.toastNotificationService.renderToastNotification('Could not delete Artist', 'danger');
        console.error('There was an error!', error)
      }
    });
  }

  openHelp() {
    this.alertService.renderAlert('Help', 'This page displays the details of an artist. You can edit or delete the artist by clicking the ellipsis icon in the top right corner and choose an option.');
  }
}
