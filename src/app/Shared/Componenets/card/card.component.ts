import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  imports: [CommonModule, CardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() iconClass: string = 'pi-user';  // Default icon
  @Input() iconStyle: string = 'font-size: 2.5rem; color:var(--color-primary)';  // Default icon style
  @Input() cardStyle: { [key: string]: string } = {};  // Custom card style (optional)


  // @Input() title: string = 'Advanced Card';
  // @Input() subtitle: string = 'Card Subtitle';
  // @Input() content: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam.';
  // @Input() imageUrl: string = 'https://primefaces.org/cdn/primeng/images/card-ng.jpg';
  // @Input() showFooter: boolean = true;
  // @Input() cancelLabel: string = 'Cancel';
  // @Input() saveLabel: string = 'Save';

  // @Output() onCancel = new EventEmitter<void>();
  // @Output() onSave = new EventEmitter<void>();

  // handleCancel() {
  //   this.onCancel.emit();
  // }

  // handleSave() {
  //   this.onSave.emit();
  // }
}
