import {Notification} from './notification.model';

export class NotificationDetails {
  public id: number;
  public montantBase: number;
  public montantRetard: number;
  public montantTotal: number;
  public nombreMoisRetard: number;
  public annee: number;
  public notification: Notification;
}
