import {Component, OnInit} from '@angular/core';
import {NotificationTypeService} from '../../controller/service/notification-type.service';
import {NotificationType} from '../../controller/model/notification-type.model';
import {Redevable} from '../../controller/model/redevable.model';
import {RedevableService} from '../../controller/service/redevable.service';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit {
  private _selectedType: NotificationType;


  constructor(private _notificationTypeService: NotificationTypeService, private _redevableService: RedevableService) {
  }

  ngOnInit(): void {
    this._notificationTypeService.findAll();
    this.setDefault();

  }


  get selectedType(): NotificationType {
    return this._selectedType;
  }

  get redevables(): Array<Redevable> {
    return this._redevableService.redevablesNotifs;
  }

  set selectedType(value: NotificationType) {
    this._selectedType = value;
  }

  get notificationTypes(): Array<NotificationType> {
    return this._notificationTypeService.notificationTypes;
  }

  public selectioner() {
    this._redevableService.notifType = this.selectedType;
    this._redevableService.findRedevableTerrainsNotifType();
  }

  private setDefault() {
    this.selectedType = null;
    this._redevableService.notifType = this.selectedType;
    this._redevableService.findRedevableTerrainsNotifType();
  }


  public afficherDetailTerrain(s: string) {
    // tslint:disable-next-line:triple-equals
    if (document.getElementById(s).className == 'd-none') {
      document.getElementById(s).className = ' ';
    } else {
      document.getElementById(s).className = 'd-none';
    }

  }

  public afficherRedevable(id: number) {
    // tslint:disable-next-line:triple-equals
    if (document.getElementById(String(id)).className == 'card-body d-none') {
      document.getElementById(String(id)).className = 'card-body ';
    } else {
      document.getElementById(String(id)).className = 'card-body d-none';
    }

  }
}
