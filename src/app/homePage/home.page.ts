import { Component } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonContent, IonGrid, IonRow, IonCol, IonButton, IonButtons, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { helpCircleOutline } from 'ionicons/icons';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCol, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonButtons],
})
export class HomePage {

  constructor(private alertService: AlertService) {
    addIcons({ helpCircleOutline })
  }

  openHelp() {
    this.alertService.renderAlert('Help', 'This page only holds basic information. Click on the "All Artists" tab to view all artists. Click on the "Search Artists" tab to search for artists. Click on the "Add Artist" tab to add a new artist.');
  }
}
