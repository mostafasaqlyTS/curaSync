import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { HttpClient, provideHttpClient, withInterceptors } from "@angular/common/http";
import { loggingInterceptor } from "./Core/Interceptors/logging.interceptor";
import { errorInterceptor } from "./Core/Interceptors/error-handler.interceptor";
import { loadingInterceptor } from "./Core/Interceptors/loading.interceptor";
import { translationInterceptor } from "./Core/Interceptors/translation.interceptor";
import { authInterceptor } from "./Core/Interceptors/auth.interceptor";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { MessageService } from 'primeng/api';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([authInterceptor, translationInterceptor, loggingInterceptor, errorInterceptor, loadingInterceptor])
    ),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })),

    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    MessageService,

  ]
};
