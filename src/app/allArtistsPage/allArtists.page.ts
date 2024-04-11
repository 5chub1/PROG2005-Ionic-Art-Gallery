import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar, IonChip } from '@ionic/angular/standalone';
import { ArtistService } from 'src/app/services/artist.service';
import Artist from '../models/artist.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-artists',
  templateUrl: 'allArtists.page.html',
  styleUrls: ['allArtists.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardContent, IonCardTitle, HttpClientModule, DatePipe, CommonModule, IonChip],
})
export class AllArtistsPage implements OnInit {
  artists: Artist[] = [];
  // This is a boolean that checks if the current page is the featured artists page.
  // If it is, we will only show the featured artists.
  isFeaturedPage = window.location.pathname === '/artists/featured';

  constructor(private artistService: ArtistService) {
  }

  ngOnInit() {
    if (!this.isFeaturedPage) {
      this.artistService.getAllArtists().subscribe({
        next: (data: Artist[]) => {
          this.artists = data;
          console.log(data);
        },
        error: (error) => console.error('There was an error!', error),
      });
    } else {
      this.artistService.getAllArtists().subscribe({
        next: (data: Artist[]) => {
          this.artists = data.filter((artist) => artist.is_featured_artist);
          console.log(data);
        },
        error: (error) => console.error('There was an error!', error),
      });
    }
  }
}
