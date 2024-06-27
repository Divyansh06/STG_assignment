export interface INotification {
  type: "error" | "success" | "";
  content: string;
  display: boolean;
}

export interface INotificationState {
  status: INotification;
}
