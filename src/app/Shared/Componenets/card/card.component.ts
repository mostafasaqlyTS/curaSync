import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card',
  imports: [ButtonModule, CardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = 'Advanced Card';
  @Input() subtitle: string = 'Card Subtitle';
  @Input() content: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam.';
  @Input() imageUrl: string = 'https://primefaces.org/cdn/primeng/images/card-ng.jpg';
  @Input() showFooter: boolean = true;
  @Input() cancelLabel: string = 'Cancel';
  @Input() saveLabel: string = 'Save';

  @Output() onCancel = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<void>();

  handleCancel() {
    this.onCancel.emit();
  }

  handleSave() {
    this.onSave.emit();
  }
}
