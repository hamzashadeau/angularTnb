import {NotificationType} from './notification-type.model';
import {Terrain} from './terrain.model';
import {NotificationDetails} from './notification-details.model';

export class Notification {
  public id: number;
  public notificationType: NotificationType;
  public terrain: Terrain;
  public anneeDepart: number;
  public anneeFin: number;
  public montantBase: number;
  public montantRetard: number;
  public nombreMoisRetard: number;
  public notificationDetails: Array<NotificationDetails>;
}
