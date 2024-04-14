import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCol, IonContent, IonGrid, IonHeader, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ArtistCardComponent } from '../components/artist-card/artist-card.component';
import Artist from '../models/artist.model';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-search-artists',
  templateUrl: 'searchArtists.page.html',
  styleUrls: ['searchArtists.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, DatePipe, CommonModule, IonGrid, IonRow, IonCol, IonSearchbar, ArtistCardComponent],
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
