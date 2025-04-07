import { Component, Input } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip'; // Re-added TooltipModule

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  imports: [TooltipModule] // Ensure TooltipModule is imported
})
export class TooltipComponent {
  @Input() tooltipText: string = 'Default Tooltip';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'right';
}
