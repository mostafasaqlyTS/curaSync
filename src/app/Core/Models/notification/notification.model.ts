export interface INotification {
  id: string;
  id_user: string;
  id_file: number;
  name_uploader: string;
  filename: string;
  file_time: number;
  isRead: boolean;
  isNew: boolean;
}

export interface NotificationUpdateAllRequest {
  id_notifications: number[];
  isRead?: boolean;
}

export interface NotificationUpdateSingleRequest {
  id_notification: number;
  isRead?: boolean;
}
