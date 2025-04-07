import { Component, Input } from '@angular/core';
import { Toast } from 'primeng/toast';
import { ToastService } from '../../../Core/Services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [Toast],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  providers: [ToastService]
})
export class CustomToastComponent {
  constructor(public toastService: ToastService) {}

  @Input() severity: "success" | "info" | "warn" | "error" = "success";
  @Input() summary: string = '';
  @Input() detail: string = '';
  @Input() customStyle?: any;

  showToast() {
    this.toastService.showToast(this.severity, this.summary, this.detail, this.customStyle);
  }

}
