import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ArtistService } from 'src/app/services/artist.service';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HttpClientModule],
})
export class Tab1Page implements OnInit {
  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.artistService.getAllArtists().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error('There was an error!', error),
    });
  }
}
