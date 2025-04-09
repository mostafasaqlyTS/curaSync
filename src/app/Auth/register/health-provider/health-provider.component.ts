import { Component, OnInit, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CardComponent } from '../../../Shared/Componenets/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-health-provider',
  imports: [ TranslatePipe,CardComponent,RouterLink],
  templateUrl: './health-provider.component.html',
  styleUrl: './health-provider.component.css'
})
export class HealthProviderComponent implements OnInit {
  listOfContentHealthProvider= signal<{ router: string, title: string; icon: string; }[]>([]);

  constructor() { }

  ngOnInit(): void {
    const HealthProviderObjectJson = signal<string>('healthProvider');
    this.listOfContentHealthProvider.set([
      {
        router: "/signUp/doctor",
        title: `${HealthProviderObjectJson()}.Doctor`,
        icon: "fa-solid fa-user-doctor",
      },
      {
        router: "/signUp/lab",
        title: `${HealthProviderObjectJson()}.Lab`,
        icon: "fa-solid fa-flask-vial"
      },
      {
        router: "/signUp/pathology",
        title: `${HealthProviderObjectJson()}.Pathology`,
        icon: "fa-solid fa-disease",
      },
      {
        router: "/signUp/radiology",
        title: `${HealthProviderObjectJson()}.Radiology`,
        icon: "fa-solid fa-x-ray"
      },
    ]);
  }
}
