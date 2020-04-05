import {Component, OnInit} from '@angular/core';
import {RedevableService} from '../controller/service/redevable.service';
import {TerrainService} from '../controller/service/terrain.service';
import {Redevable} from '../controller/model/redevable.model';
import {Terrain} from '../controller/model/terrain.model';
import {NotificationService} from '../controller/service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private _redevableService: RedevableService, private _terrainService: TerrainService,
              private _notificationService: NotificationService) {
  }


  get redevables(): Array<Redevable> {
    return this._redevableService.redevablesNp;
  }

  set redevables(value: Array<Redevable>) {
    this._redevableService.redevablesNp = value;
  }


  ngOnInit(): void {
    this._redevableService.findTerrainsRedevableNp();
  }

  public click() {
    this._redevableService.findTerrainsRedevableNp();
    console.log(this._redevableService.redevablesNp);
  }


  afficher(id: number) {
    // tslint:disable-next-line:triple-equals
    if (document.getElementById(String(id)).className == 'card-body d-none') {
      document.getElementById(String(id)).className = 'card-body ';
    } else {
      document.getElementById(String(id)).className = 'card-body d-none';
    }
  }

  notifyAll() {
    this._notificationService.NotifyAll();
  }
}
