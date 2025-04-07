import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const getErrorMessage = (error: HttpErrorResponse): string => {
  if (error.error instanceof ErrorEvent) {
    return `Client Error: ${error.error.message}`;
  }
  switch (error.status) {
    case 400:
      return 'Bad Request - Invalid input!';
    case 401:
      return 'Unauthorized - Please log in!';
    case 403:
      return 'Forbidden - You do not have permission!';
    case 404:
      return 'Not Found - The requested resource was not found!';
    case 500:
      return 'Internal Server Error - Please try again later!';
    default:
      return `Error ${error.status}: ${error.message}`;
  }
};

export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const errorMessage = getErrorMessage(error);
      console.error(`🚨 [Error Interceptor] ${req.method} ${req.urlWithParams}: ${errorMessage}`);
      return throwError(() => new Error(errorMessage));
    })
  );
};
