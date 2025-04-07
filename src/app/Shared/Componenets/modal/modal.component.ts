import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-modal',
  imports: [DialogModule, ButtonModule, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'] // Fixed typo from styleUrl to styleUrls
})
export class ModalComponent {
  @Input() visible: boolean = false;
  @Input() header: string = 'Confirm Action';
  @Input() width: string = '40vw';
  @Input() height: string = 'auto';
  @Input() closeOnEscape: boolean = true;
  @Input() modal: boolean = true;
  @Input() confirmLabel: string = 'Confirm';
  @Input() cancelLabel: string = 'Cancel';
  @Input() image: { src?: string, alt?: string } | null = null


  @Output() onClose = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<void>();

  closeModal(): void { // Added strict typing
    this.onClose.emit();
  }

  confirmAction(): void { // Added strict typing
    this.onConfirm.emit();
  }
}
