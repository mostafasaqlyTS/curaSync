import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-services-page',
  imports: [TranslatePipe, NgClass],
  standalone:true,
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesPageComponent {
  staticTranslatedNames!: any
  MedicalServiceOfList!:any

  constructor() {
    this.initializeStaticTranslatedNames();
    this.initializeMedicalServiceOfList();
  }

  private initializeStaticTranslatedNames() {
    this.staticTranslatedNames = {
      "services": 'services',
      "introductionWithMedicalServices":
        'medicalServicesPage.introductionWithMedicalServices',
      "MedicalServiceOfListTitle":
        'medicalServicesPage.MedicalServiceOfListTitle',
      "MedicalServiceOfListDescription":
        'medicalServicesPage.MedicalServiceOfListDescription',
    };
  }

  private initializeMedicalServiceOfList() {
    this.MedicalServiceOfList = [
      {
        title: this.staticTranslatedNames.MedicalServiceOfListTitle,
        icon: 'pi pi-car',
        styleClass: 'text-warn', // Added style class for warn color
        description: this.staticTranslatedNames.MedicalServiceOfListDescription,
      },
      {
        title: this.staticTranslatedNames.MedicalServiceOfListTitle,
        icon: 'pi pi-bars',
        styleClass: 'text-warn', // Added style class for warn color
        description: this.staticTranslatedNames.MedicalServiceOfListDescription,
      },
      {
        title: this.staticTranslatedNames.MedicalServiceOfListTitle,
        icon: 'pi pi-heart-fill',
        styleClass: 'text-warn', // Added style class for warn color
        description: this.staticTranslatedNames.MedicalServiceOfListDescription,
      },
      {
        title: this.staticTranslatedNames.MedicalServiceOfListTitle,
        icon: 'pi pi-building',
        styleClass: 'text-warn', // Added style class for warn color
        description: this.staticTranslatedNames.MedicalServiceOfListDescription,
      },
    ];
  }
}

