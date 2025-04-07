import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const logMessage = (prefix: string, message: any) => console.log(`${prefix} [${req.method}] ${req.urlWithParams}`, message);

  logMessage('🟢 Request', req);
  console.time(`[${req.method}] ${req.urlWithParams}`);

  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        console.timeEnd(`[${req.method}] ${req.urlWithParams}`);
        const elapsedTime = event.headers.get('X-Elapsed-Time') || 'N/A'; // Example of adding elapsed time if available
        logMessage(`✅ Response - Elapsed Time: ${elapsedTime}`, event);
      }
    })
  );
};
