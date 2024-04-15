import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertButton } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Service for rendering alerts.
 */
export class AlertService {

  constructor(private alertController: AlertController) { }

  /**
   * Renders an alert with the specified title and message.
   * @param title - The title of the alert.
   * @param message - The message of the alert.
   * @param alertButtons - Optional. An array of button labels or an array of `AlertButton` objects.
   */
  async renderAlert(title: string, message: string, alertButtons?: string[] | AlertButton[]) {
    const alert = await this.alertController.create({
      header: title,
      message,
      buttons: alertButtons || ['Dismiss'],
    });
    await alert.present();
  }
}
