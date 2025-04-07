import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Optimize performance
})
export class LoaderComponent {
  @Input() isLoading: boolean = false; // Control loader visibility
  @Input() message: string = 'Loading...'; // Custom loading message
  @Input() size: string = '2rem'; // Customize icon size
  @Input() color: string = '#ffffff'; // Customize icon color
}
