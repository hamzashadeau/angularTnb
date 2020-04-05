import {Injectable} from '@angular/core';
import {NotificationType} from '../model/notification-type.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationTypeService {

  private _notificationTypes: Array<NotificationType> = new Array<NotificationType>();

  constructor(private http: HttpClient) {
  }

  get notificationTypes(): Array<NotificationType> {
    return this._notificationTypes;
  }

  set notificationTypes(value: Array<NotificationType>) {
    this._notificationTypes = value;
  }

  public findAll() {
    this.http.get<Array<NotificationType>>('http://localhost:8080/TNB-api/NotificationType/findAll').subscribe(
      value => {
        this.notificationTypes = value;
      }
    );
  }
}
