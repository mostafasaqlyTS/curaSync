import {
  Component,
  effect,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { countries } from '../../../Core/Models/auth/login.model';

export interface IFormField {
  type: 'text' | 'number' | 'select' | 'textarea' | 'password' | 'phone';
  name: string;
  label?: string;
  rows?: string;
  cols?: string;
  placeholder: string;
  icon?: string;
  options?: { name: string; value: any }[];
}

@Component({
  selector: 'app-formGroup',
  templateUrl: './form-group.component.html',
  imports: [
    ReactiveFormsModule,
    InputGroupModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    TextareaModule,
    InputGroupAddonModule,
    CommonModule,
  ],
})
export class FormGroupComponent implements OnInit, OnDestroy {
  @Input() formGroup!: FormGroup;
  @Input() fields: IFormField[] = [];
  @Input() placeholderMapping: { [key: string]: string } = {};

  getPlaceholder(fieldName: string): string {
    return this.placeholderMapping[fieldName] || '';
  }

  countries: any[] = countries;
  phoneRegex: RegExp = /.*/;

  isSmallScreen: boolean = window.innerWidth < 1024;
  isArabic: boolean = false;
  langSubscription!: Subscription;

  constructor(
    private http: HttpClient,
    private translateService: TranslateService
  ) {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }
  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 1024;
  }

  ngOnInit(): void {
    this.initializePhoneField();

    // Update the language when changing without the need for refreshing
    this.translateService.onLangChange.subscribe((event) => {
      this.isArabic = event.lang === 'ar';
      document.documentElement.dir = this.isArabic ? 'rtl' : 'ltr';
    });

    // Set the initial value
    this.isArabic = this.translateService.currentLang === 'ar';
  }

  get passwordIconStyle() {
    return {
      cursor: 'pointer',
      position: 'absolute',
      top: '10px',
      ...(this.isArabic ? { left: '10px' } : { right: '10px' }),
    };
  }

  private initializePhoneField() {
    const phoneField = this.fields.find((field) => field.type === 'phone');
    if (phoneField) {
      this.http.get(`https://ipinfo.io/json`).subscribe({
        next: (data: any) => {
          const userCountry =
            this.countries.find((c) => c.name === data.country) ||
            this.countries.find((c) => c.name === 'UAE');
          this.phoneRegex = userCountry.phoneRegex;
          this.formGroup.patchValue({
            [phoneField.name]: { country: userCountry, phone_number: '' },
          });
        },
        error: () => {
          const defaultCountry = this.countries.find((c) => c.name === 'UAE');
          this.phoneRegex = defaultCountry.phoneRegex;
          const phoneControl = this.formGroup.get(phoneField.name) as FormGroup;
          if (phoneControl) {
            phoneControl.patchValue({
              country: defaultCountry,
              phone_number: '',
            });
          }
        },
      });
    }
  }

  onCountryChange(fieldName: string, event: any) {
    const selectedCountry = event.value;
    this.phoneRegex = selectedCountry.phoneRegex;
    this.formGroup.patchValue({
      [fieldName]: { country: selectedCountry, phone_number: '' },
    });
  }

  isPhoneInvalid(fieldName: string): boolean {
    const control = this.formGroup.get(fieldName);
    return (control?.invalid && (control.dirty || control.touched)) ?? false;
  }

  togglePasswordVisibility(passwordInputRef: HTMLInputElement) {
    passwordInputRef.type =
      passwordInputRef.type === 'password' ? 'text' : 'password';
  }

  ngOnDestroy(): void {
    // Clean the subscription to avoid leaks
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
}
