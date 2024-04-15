import { Component } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonContent, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonCol, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow],
})
export class HomePage {

  constructor() { }

}
