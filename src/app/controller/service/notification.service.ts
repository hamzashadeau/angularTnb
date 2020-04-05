import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RedevableService} from './redevable.service';
import {Redevable} from '../model/redevable.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient, private _redevableService: RedevableService) {
  }

  public NotifyAll() {
    for (const r of this.redevablesNp) {
      for (const t of r.terrains) {
        this.http.post<number>('http://localhost:8080/TNB-api/Notification/giveNotification', t.id).subscribe(
          value => {
            this._redevableService.findTerrainsRedevableNp();
            // tslint:disable-next-line:triple-equals
            if (value != 1) {
              console.log('erreur');
            }
          }, error => console.log('autre Erreur')
      )
        ;
      }
    }
  }

  get redevablesNp(): Array<Redevable> {
    return this._redevableService.redevablesNp;
  }
}
