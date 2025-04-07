import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { ButtonComponent } from '../../Shared/Componenets/button/button.component';
import { FormGroupComponent, IFormField } from '../../Shared/Componenets/form-group/form-group.component';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, TranslatePipe, ButtonComponent, FormGroupComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    subject: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
  });

  formFields$ = new BehaviorSubject<IFormField[]>([]);

  ngOnInit(): void {
    const updatedFields: IFormField[] = [
      {
        type: 'text',
        name: 'subject',
        placeholder: '',
      },
      {
        type: 'textarea',
        name: 'message',
        rows: '5',
        cols: '100',
        placeholder: '',
      },
    ];

    this.formFields$.next(updatedFields);

  }

  sendContact() {
    if (this.contactForm.valid) {
      const email = 'ahmed.said@trustsystemsinc.com';
      const mailOutLook = `mailto:${email}?subject=${this.contactForm.value.subject}&body=${this.contactForm.value.message}`;
      window.location.href = mailOutLook;
    }
  }

}
