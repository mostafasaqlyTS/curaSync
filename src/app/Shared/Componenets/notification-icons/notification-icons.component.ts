import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { INotification } from '../../../Core/Models/notification/notification.model';
import { NotificationService } from '../../../Core/Services/notification.service';

@Component({
  selector: 'app-notification-icon',
  templateUrl: './notification-icons.component.html',
  styleUrls: ['./notification-icons.component.css']
})
export class NotificationIconComponent implements OnInit, OnDestroy {
  notifications: INotification[] = [];
  private subscription: Subscription = new Subscription();
  private notificationsService = inject(NotificationService);
  errorMessage: string | null = null;

  ngOnInit() {
    this.fetchNotifications();
  }

  fetchNotifications(): void {
    this.subscription.add(
      this.notificationsService.getAllNotifications('your-token-here').subscribe({
        next: (data) => {
          this.notifications = data;
          this.errorMessage = null;
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('Error fetching notifications:', error);
        }
      })
    );
  }

  updateAllNotifications(): void {
    const request = { id_notifications : [1,2], isRead:true }; // Example payload
    this.subscription.add(
      this.notificationsService.updateAllNotifications(request, 'your-token-here').subscribe({
        next: (response) => {
          console.log('All notifications updated:', response.message);
          this.errorMessage = null;
          this.fetchNotifications(); // Refresh notifications
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('Error updating all notifications:', error);
        }
      })
    );
  }

  updateNotification(notificationId: number): void {
    const request = { id_notification: notificationId, isRead:true }; // Example payload
    this.subscription.add(
      this.notificationsService.updateNotification(request, 'your-token-here').subscribe({
        next: (response) => {
          console.log(`Notification ${notificationId} updated:`, response.message);
          this.errorMessage = null;
          this.fetchNotifications(); // Refresh notifications
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error(`Error updating notification ${notificationId}:`, error);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
