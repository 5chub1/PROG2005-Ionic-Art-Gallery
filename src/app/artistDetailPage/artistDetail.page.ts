import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonChip, IonButton, IonCard, IonActionSheet, IonLabel, IonItem, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonIcon, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import Artist from '../models/artist.model';
import { ArtistService } from '../services/artist.service';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { calendar, call, clipboard, colorPalette, ellipsisHorizontalCircleOutline } from 'ionicons/icons';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-artist-detail',
  templateUrl: 'artistDetail.page.html',
  styleUrls: ['artistDetail.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonChip, DatePipe, CommonModule, IonButton, IonCard, IonLabel, IonItem, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonIcon, IonButtons, IonBackButton, IonActionSheet],
})
export class ArtistDetailPage implements OnInit {
  artist: Artist = {} as Artist;

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
        const alert = await this.alertController.create({
          header: 'Delete Artist',
          message: 'Are you sure you want to delete this artist? This action cannot be undone.',
          buttons: this.alertButtons,
        });

        await alert.present();
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

  constructor(private artistService: ArtistService, private route: ActivatedRoute, private alertController: AlertController) {
    addIcons({ calendar, call, colorPalette, clipboard, ellipsisHorizontalCircleOutline });
  }

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
        console.log(data);
      },
      error: (error) => console.error('There was an error!', error),
    });
  }

  /**
   * Deletes the artist from the API.
   */
  deleteArtist() {
    this.artistService.deleteArtist(this.artist.name).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => console.error('There was an error!', error),
    });
  }
}
