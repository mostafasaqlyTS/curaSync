import { Component } from '@angular/core';
import { MainLayoutComponent } from "./AppPages/main-layout/main-layout.component";

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MD-FrontEnd-April2025';
}
