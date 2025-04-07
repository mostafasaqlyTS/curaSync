import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private messageService = inject(MessageService);

  showToast(
    severity: 'success' | 'info' | 'warn' | 'error',
    summary: string,
    detail: string,
    customStyle?: any
  ) {
    this.messageService.add({
      severity,
      summary,
      detail,
      styleClass: customStyle?.styleClass || '', // Apply custom style class if provided
      life: customStyle?.life || 3000, // Set default duration if not provided
    });
  }

  clearToast() {
    this.messageService.clear();
  }
}
