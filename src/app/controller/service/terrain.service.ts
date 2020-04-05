import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Terrain} from '../model/terrain.model';
import {Redevable} from '../model/redevable.model';
import {RedevableService} from './redevable.service';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {
  private _terrain: Terrain = new Terrain();
  private _redevable: Redevable = new Redevable();
  private _terrainsRedevableNP: Array<Terrain> = new Array<Terrain>();

  constructor(private http: HttpClient) {
  }

  get terrain(): Terrain {
    return this._terrain;
  }

  set terrain(value: Terrain) {
    this._terrain = value;
  }

  get redevable(): Redevable {
    return this._redevable;
  }

  set redevable(value: Redevable) {
    this._redevable = value;
  }



  get terrainsRedevableNP(): Array<Terrain> {
    if (this._terrainsRedevableNP == null) {
      this._terrainsRedevableNP = new Array<Terrain>();
    }
    return this._terrainsRedevableNP;
  }

  set terrainsRedevableNP(value: Array<Terrain>) {
    this._terrainsRedevableNP = value;
  }
}


