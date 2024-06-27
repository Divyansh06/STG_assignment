// Interface of Notification object
export interface INotification {
  type: "error" | "success" | "";
  content: string;
  display: boolean;
}

// Interface of Notification states in notification slice
export interface INotificationState {
  status: INotification;
}
