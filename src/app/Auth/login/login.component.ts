import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { BehaviorSubject } from 'rxjs';
import { ButtonComponent } from '../../Shared/Componenets/button/button.component';
import { FormGroupComponent, IFormField } from '../../Shared/Componenets/form-group/form-group.component';
import { UserService } from '../../Core/Services/user.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ButtonComponent,
    FormGroupComponent,
    TranslatePipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  // ✅ Initialize `BehaviorSubject` with an empty array instead of `null`
  formFields$: BehaviorSubject<IFormField[]> = new BehaviorSubject<
    IFormField[]
  >([]);

  constructor(
    public translateService: TranslateService,
    private cdr: ChangeDetectorRef, // ✅ To force Angular to refresh fields
    private userService: UserService,
    private router: Router,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.updateFormFields();

    // ✅ Update fields when changing the language directly
    this.translateService.onLangChange.subscribe(() => {
      this.updateFormFields();
    });

    this.initForm()
    
  }

  initForm(){
    this.myForm = new FormGroup({
      password: new FormControl(''),
      phone: new FormGroup({
        country: new FormControl(null, Validators.required),
        phone_number: new FormControl('', [Validators.required]),
      }),
    });
  }



  /************ Update translated fields when changing language **********/
  updateFormFields() {
    this.translateService
      .get(['Enter your password', 'Enter a valid phone number'])
      .subscribe((translations) => {
        const updatedFields: IFormField[] = [
          {
            type: 'phone',
            name: 'phone',
            placeholder: translations['Enter a valid phone number'],
            icon: 'pi pi-phone',
          },
          {
            type: 'password',
            name: 'password',
            placeholder: translations['Enter your password'],
            icon: 'pi pi-lock',
          }
        ];
        this.formFields$.next(updatedFields);
        this.cdr.detectChanges();
      });
  }

  submitLogin() {
    let user = {
      password: this.myForm.value.password,
      phone_number: this.myForm.value.phone.phone_number,
      country_code: this.myForm.value.phone.country.code,
    };

    this.userService.login(user).subscribe({
      next: (res) => {
        let user = this.userService.getUser();
        if (user) {
          // this.toaster.success(this.translationNames['Logged in Successfully']);
          console.log('user',user)
          this.router.navigate([`/${user?.role}/${user?.id}`]);
        }
      },
      error: (err) => {
        // this.toaster.error(err.error.message);
      },
    });
  }

  // // password properties
  // hasMinLength = false;
  // hasUpperCase = false;
  // hasLowerCase = false;
  // hasNumber = false;
  // hasSpecialChar = false;

  // password methods
  // validatePassword(password: string): void {
  //   this.hasMinLength = password.length >= 8;
  //   this.hasUpperCase = /[A-Z]/.test(password);
  //   this.hasLowerCase = /[a-z]/.test(password);
  //   this.hasNumber = /\d/.test(password);
  //   this.hasSpecialChar = /[@$!%*?&]/.test(password);
  // }



}
