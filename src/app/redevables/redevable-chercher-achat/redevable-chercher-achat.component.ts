import { Component, OnInit } from '@angular/core';
import {RedevableService} from "../../controller/service/redevable.service";
import {Terrain} from "../../controller/model/terrain.model";
import {Achat} from "../../controller/model/achat.model";
import {Datee} from "../../controller/model/datee.model";

@Component({
  selector: 'app-redevable-chercher-achat',
  templateUrl: './redevable-chercher-achat.component.html',
  styleUrls: ['./redevable-chercher-achat.component.css']
})
export class RedevableChercherAchatComponent implements OnInit {

  constructor(private _redevableService: RedevableService) { }

  ngOnInit(): void {
  }get findAchatByTerrainId(): void {
    return this._redevableService.findAchatByTerrainId();
  }
  get findAchatByoldRedevableId(): void {
    return this._redevableService.findAchatByoldRedevableId();
  }
  get findAchatByNewRedevableId(): void {
    return this._redevableService.findAchatByNewRedevableId();
  }
  get terrainAchatID(): Terrain {
    return this._redevableService.terrainAchatID;
  }
  get achatTerrain(): Array<Achat> {
    return this._redevableService.achatTerrain;
  }
  get date(): Datee {
    return this._redevableService.date;
  }
  get findAchatBydateAchat(): void {
    return this._redevableService.findAchatBydateAchat();
  }
  public selectioner(event) {
    console.log(event.target.value);
    const val = event.target.value;
    if (val === 'findByTerrainId') {
      document.getElementById('findBydateachat').style.display = 'none';
      document.getElementById('findByterrain').style.display = 'inline';
      document.getElementById('findByoldredevableId').style.display = 'none';
      document.getElementById('findBynewredevableId').style.display = 'none';
    } else if (val === 'findByAchatDate') {
      document.getElementById('findBydateachat').style.display = 'inline';
      document.getElementById('findByterrain').style.display = 'none';
      document.getElementById('findByoldredevableId').style.display = 'none';
      document.getElementById('findBynewredevableId').style.display = 'none';
    } else if (val === 'findByOldRedevableid') {
      document.getElementById('findBydateachat').style.display = 'none';
      document.getElementById('findByterrain').style.display = 'none';
      document.getElementById('findByoldredevableId').style.display = 'inline';
      document.getElementById('findBynewredevableId').style.display = 'none';
    } else if (val === 'findByNewRedevableid') {
      document.getElementById('findBydateachat').style.display = 'none';
      document.getElementById('findByterrain').style.display = 'none';
      document.getElementById('findByoldredevableId').style.display = 'none';
      document.getElementById('findBynewredevableId').style.display = 'inline';
    } else if (val === 'acceuil') {
      document.getElementById('findBydateachat').style.display = 'none';
      document.getElementById('findByterrain').style.display = 'none';
      document.getElementById('findByoldredevableId').style.display = 'none';
      document.getElementById('findBynewredevableId').style.display = 'none';
    }
  }

}
