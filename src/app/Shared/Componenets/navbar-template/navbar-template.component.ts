import { Component, inject, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MenubarModule } from 'primeng/menubar';
import { NavbarItemsComponent } from '../navbar-items/navbar-items.component';

@Component({
  selector: 'app-navbar-template',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, MenubarModule, NavbarItemsComponent],
  templateUrl: './navbar-template.component.html',
  styleUrls: ['./navbar-template.component.css']
})
export class NavbarTemplateComponent {
  private translateService = inject(TranslateService);

  constructor() {
    this.initializeLanguage();
  }

  private initializeLanguage() {
    const savedLang = localStorage.getItem('user-language') || 'en';
    this.translateService.setDefaultLang(savedLang);
    this.translateService.use(savedLang);
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';

    effect(() => {
      document.documentElement.dir = this.translateService.currentLang === 'ar' ? 'rtl' : 'ltr';
    });
  }
}
