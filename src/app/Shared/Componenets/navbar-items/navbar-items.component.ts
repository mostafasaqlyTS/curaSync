import { Component, computed, effect, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ButtonComponent } from "../button/button.component"; // Import TranslationService
import { MenuItem } from 'primeng/api';
import {UserService} from '../../../Core/Services/user.service';
import { LanguageService } from '../../../Core/Services/langugue.service';
@Component({
  selector: 'app-navbar-items',
  standalone: true,
  imports: [RouterModule, TranslateModule, ButtonModule,
    MenubarModule, ButtonComponent],
  templateUrl: './navbar-items.component.html',
  styleUrls: ['./navbar-items.component.css'],
})
export class NavbarItemsComponent {
  private authService = inject(UserService);
  public translationService = inject(LanguageService); // Make TranslationService public
  private router = inject(Router);

  user = signal<any>(null);
  isLoggedIn = computed(() => !!this.user());
  //isLoggedIn = signal(true);   // used for test menu item
  links = signal<MenuItem[]>([]);

  constructor() {
    this.initializeUser();
    this.subscribeToLanguageChanges(); // Subscribe to language changes
  }

  private initializeUser() {
    try {
      effect(() => {
        const userValue = this.authService.getUser(); // Use a public method or getter
        if (!userValue || typeof userValue !== 'object' || !userValue.id) {
          //console.warn('Invalid user data received:', userValue);
          this.user.set(null); // Fallback to null if user data is invalid
          return;
        }
        this.user.set(userValue);
      });
    } catch (error) {
      console.error('Error initializing user with authService:', error);
      this.user.set(null); // Ensure user is set to null in case of an error
    }
  }

  private subscribeToLanguageChanges(): void {
    this.translationService.languageChange.subscribe((lang) => {
      this.updateDirection(lang.lang); // Update direction based on language change
    });
  }

  private updateDirection(lang: string): void {
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction; // Update the direction globally
  }

  logOut() {
    try {
      this.authService.logout();
      this.user.set(null);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error during logout with authService:', error);
    }
  }


  async switchLanguage() {
    const newLang = this.translationService.currentLanguageValue === 'ar' ? 'en' : 'ar';
    await this.translationService.changeLanguage(newLang);
  }
}
