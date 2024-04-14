import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonNote, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import Artist from '../models/artist.model';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-search-artists',
  templateUrl: 'searchArtists.page.html',
  styleUrls: ['searchArtists.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, DatePipe, CommonModule, IonGrid, IonRow, IonCol, IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonChip, IonNote],
})
export class SearchArtistsPage implements OnInit {
  artists: Artist[] = [];
  filteredArtists: Artist[] = [];
  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.artistService.getAllArtists().subscribe({
      next: (data: Artist[]) => {
        this.artists = data;
        console.log(data);
      },
      error: (error) => console.error('There was an error!', error),
    });
  }

  searchForArtists(event: any) {
    const query = event.target.value;
    if (!query || query === '') {
      this.filteredArtists = [];
      return;
    } else {
      this.filteredArtists = this.artists.filter((artist) => artist.name.toLowerCase().includes(query.toLowerCase()));
      console.log(this.filteredArtists);
    }
  }
}
