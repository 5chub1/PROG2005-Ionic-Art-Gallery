import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ArtistService } from 'src/app/services/artist.service';
import { ArtistCardComponent } from '../components/artist-card/artist-card.component';
import Artist from '../models/artist.model';
import { helpCircleOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-all-artists',
  templateUrl: 'allArtists.page.html',
  styleUrls: ['allArtists.page.scss'],
  standalone: true,
  imports: [IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, CommonModule, IonSegment, IonSegmentButton, IonLabel, ArtistCardComponent, IonButtons, IonButton],
})
export class AllArtistsPage implements OnInit {
  artists: Artist[] = [];
  displayedArtists: Artist[] = [];
  // This is a boolean that checks if the current page is the featured artists page.
  // If it is, we will only show the featured artists.
  isFeaturedPage = false

  constructor(private artistService: ArtistService, private alertService: AlertService) {
    addIcons({ helpCircleOutline });
  }

  /**
   * Handles the segment change event.
   * @param event - The segment change event object.
   */
  segmentChanged(event: any) {
    if (event.detail.value === 'featured') {
      this.isFeaturedPage = true;
      this.displayedArtists = this.artists.filter((artist) => artist.is_featured_artist);
    } else {
      this.isFeaturedPage = false;
      this.displayedArtists = this.artists;
    }
  }

  ngOnInit() {
    this.artistService.getAllArtists().subscribe({
      next: (data: Artist[]) => {
        this.artists = data;
        this.displayedArtists = this.artists;
      },
      error: (error) => console.error('There was an error!', error),
    });
  }

  openHelp() {
    this.alertService.renderAlert('Help', 'Use this page to view all artists. You can filter the artists by featured artists by selecting "Featured" at the top. Click an artist to view more details about them. Click "Add" to open the add artist form.');
  }
}
