import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ArtistService } from 'src/app/services/artist.service';
import { ArtistCardComponent } from '../components/artist-card/artist-card.component';
import Artist from '../models/artist.model';

@Component({
  selector: 'app-all-artists',
  templateUrl: 'allArtists.page.html',
  styleUrls: ['allArtists.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, CommonModule, IonSegment, IonSegmentButton, IonLabel, ArtistCardComponent],
})
export class AllArtistsPage implements OnInit {
  artists: Artist[] = [];
  displayedArtists: Artist[] = [];
  // This is a boolean that checks if the current page is the featured artists page.
  // If it is, we will only show the featured artists.
  isFeaturedPage = false

  constructor(private artistService: ArtistService) {
  }

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
        console.log(data);
      },
      error: (error) => console.error('There was an error!', error),
    });
  }
}
