import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [ButtonModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'] // Fixed typo
})
export class ButtonComponent {
  @Input() icon?: string;
  @Input() label: string = 'Click Me';
  @Input() iconPos: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @Input() disabled: boolean = false;
  @Input() textColor: string = '#000'; // Default black text
  @Input() onClick: () => void = () => {}; // Improved default value
  @Input() severity: "success" | "info" | "warn" | "danger" | "help" | "primary" | "secondary" | "contrast" | null | undefined = 'warn';
  @Input() variant?: "outlined" | "text" | undefined = 'outlined';
}
