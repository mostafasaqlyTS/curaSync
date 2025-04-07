import { HttpInterceptorFn } from '@angular/common/http';

export const translationInterceptor: HttpInterceptorFn = (request, next) => {
  const currentLanguage = localStorage.getItem('lang') || 'en';

  const modifiedRequest = request.clone({
    setHeaders: {
      'Accept-Language': currentLanguage,
    },
  });

  return next(modifiedRequest);
};
