import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { FormGroupComponent, IFormField } from '../../../Shared/Componenets/form-group/form-group.component';
import { ButtonComponent } from '../../../Shared/Componenets/button/button.component';

@Component({
  selector: 'app-sign-up-form',
  imports: [FormGroupComponent, ButtonComponent, CommonModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css',
})
export class SignUpFormComponent implements OnInit {
  myForm!: FormGroup;
  genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];
  // ✅ Initialize `BehaviorSubject` with an empty array instead of `null`
  formFields$: BehaviorSubject<IFormField[]> = new BehaviorSubject<
    IFormField[]
  >([]);
 constructor( public translate: TranslateService){}
  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormGroup({
        country: new FormControl('', Validators.required),
        phoneNumber: new FormControl('', Validators.required),
      }),
      birthDate: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      allowDownload: new FormControl(false),
    });
  }


  submitLogin(){
    
  }
}
