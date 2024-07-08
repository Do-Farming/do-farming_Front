import * as Notifications from 'expo-notifications';
import { StackNavigationProp } from '@react-navigation/stack';

export interface SignUpRequest {
  name: string;
  password: string;
  phoneNumber: string;
  identificationNumber: string;
  deviceId: string;
}

export interface ApiResponse<T> {
  isSuccess: boolean;
  message: string;
  result: T;
}

export interface Notification {
  request: Notifications.NotificationRequest;
  date: Date;
  content: Notifications.NotificationContent;
}
