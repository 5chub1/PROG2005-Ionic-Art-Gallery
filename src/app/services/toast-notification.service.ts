import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Color } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {

  constructor(private toastController: ToastController) { }

  /**
   * Renders a toast notification with the specified message and status color.
   * @param message - The message to be displayed in the toast notification.
   * @param status - The color of the toast notification.
   */
  async renderToastNotification(message: string, status: Color) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'top',
      color: status,
    });
    await toast.present();
  }
}
