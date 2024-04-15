import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
  standalone: true,
  imports: [IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonRow, IonCol]
})
export class PrivacyPage {

  constructor() { }
}
