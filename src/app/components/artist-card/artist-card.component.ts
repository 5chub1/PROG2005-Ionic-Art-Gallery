import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonNote } from '@ionic/angular/standalone';
import Artist from 'src/app/models/artist.model';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonNote, DatePipe, CommonModule],
})
export class ArtistCardComponent {
  @Input() artist!: Artist;
  constructor() { }
}
