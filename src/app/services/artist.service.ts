import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import Artist from '../models/artist.model';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
/**
 * Service for managing artists in the art gallery.
 */
export class ArtistService {

  private baseUrl = 'https://prog2005.it.scu.edu.au/ArtGalley';

  constructor(private http: HttpClient, private alertController: AlertController) { }

  /**
   * Retrieves all artists from the API.
   * @returns An observable that emits the response from the API.
   */
  getAllArtists(): Observable<Artist[]> {
    return this.http.get<any>(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Retrieves an artist by their name from the API.
   * @param name The name of the artist to retrieve.
   * @returns An observable that emits the response from the API.
   */
  getArtistByName(name: string): Observable<Artist[] | Artist> {
    return this.http.get<any>(`${this.baseUrl}/${name}`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Updates an artist's data in the API.
   * @param name The name of the artist to update.
   * @param artist The updated data for the artist.
   * @returns An observable that emits the response from the API.
   */
  updateArtist(name: string, artist: Artist): Observable<Artist> {
    return this.http.put<any>(`${this.baseUrl}/${name}`, artist).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Creates a new artist in the API.
   * @param artist The data for the new artist.
   * @returns An observable that emits the response from the API.
   */
  createArtist(artist: Artist): Observable<Artist> {
    return this.http.post<any>(`${this.baseUrl}/`, artist).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Deletes an artist from the API.
   * @param name The name of the artist to delete.
   * @returns An observable that emits the response from the API.
   * @throws An error if the artist name is "Terry".
   */
  deleteArtist(name: string): Observable<Artist> {
    if (name.toLowerCase() === 'terry') {
      this.showErrorAlert('Removal of the artist named "Terry" is forbidden.');
      return throwError(() => new Error('Removal of the artist named "Terry" is forbidden.'));
    }
    return this.http.delete<any>(`${this.baseUrl}/${name}`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Handles HTTP error responses.
   * @param error The HTTP error response.
   * @returns An observable with a user-facing error message.
   */
  public handleError(error: HttpErrorResponse): Observable<never> {
    let userMessage = 'Something bad happened; please try again later.';
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      userMessage = error.error.message;
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      userMessage = `Error code: ${error.status}. Please try again later.`;
    }

    this.showErrorAlert(userMessage);
    return throwError(() => new Error(userMessage));
  }

  private async showErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Oops! Something went wrong.',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
