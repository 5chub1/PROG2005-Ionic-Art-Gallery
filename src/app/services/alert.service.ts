import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertButton } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async renderAlert(title: string, message: string, alertButtons?: string[] | AlertButton[]) {
    const alert = await this.alertController.create({
      header: title,
      message,
      buttons: alertButtons || ['Dismiss'],
    });
    await alert.present();
  }
}
