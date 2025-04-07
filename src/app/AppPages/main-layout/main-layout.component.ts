import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarTemplateComponent } from '../../Shared/Componenets/navbar-template/navbar-template.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterModule, NavbarTemplateComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
