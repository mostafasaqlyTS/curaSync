import { Component, OnInit, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { CardComponent } from '../../Shared/Componenets/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CardComponent, TranslatePipe, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  listOfContentRegister = signal<{ router: string, title: string; icon: string; description: string }[]>([]);

  constructor() { }

  ngOnInit(): void {
    this.listOfContentRegister.set([
      {
        router: "/signUp/patient",
        title: "patient",
        icon: "pi pi-user",
        description: "you can register as a patient"
      },
      {
        router: "/signUp/healthProvider",
        title: "Health Care Provider",
        icon: "pi pi-heart",
        description: "you can register as health provider"
      }
    ]);
  }
}
