import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonChip } from '@ionic/angular/standalone';
import Artist from '../models/artist.model';
import { ArtistService } from '../services/artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-detail',
  templateUrl: 'artistDetail.page.html',
  styleUrls: ['artistDetail.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonChip, DatePipe, CommonModule]
})
export class ArtistDetailPage implements OnInit {
  artist: Artist = {} as Artist;

  constructor(private artistService: ArtistService, private route: ActivatedRoute) {
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
}
