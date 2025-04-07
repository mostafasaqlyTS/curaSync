import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  INotification,
  NotificationUpdateAllRequest,
  NotificationUpdateSingleRequest
} from '../Models/notification/notification.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllNotifications(token: string): Observable<INotification[]> {
    return this.http.get<INotification[]>(`${this.baseUrl}/getAllNotifications`).pipe(
      catchError(this.handleError)
    );
  }

  updateAllNotifications(
    request: NotificationUpdateAllRequest,
    token: string
  ): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(
      `${this.baseUrl}/updateAllNotifications`,
      request
    ).pipe(
      catchError(this.handleError)
    );
  }

  updateNotification(
    request: NotificationUpdateSingleRequest,
    token: string
  ): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(
      `${this.baseUrl}/updateNotifications`,
      request
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
