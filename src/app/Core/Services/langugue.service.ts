import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage = 'en';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    const savedLang = localStorage.getItem('lang') || this.translate.getBrowserLang();
    const lang = savedLang?.match(/en|ar/) ? savedLang : 'en';
    this.translate.use(lang);
  }

  get currentLanguageValue(): string {
    return this.translate.currentLang;
  }

  get languageChange() {
    return this.translate.onLangChange;
  }

  async changeLanguage(newLang: string): Promise<void> {
    if (this.currentLanguageValue === newLang) return;
    this.currentLanguage = newLang;
    this.translate.use(newLang);
    localStorage.setItem('lang', newLang);
  }


  public getCurrentLanguage(): string {
    return this.currentLanguageValue;
  }

}
