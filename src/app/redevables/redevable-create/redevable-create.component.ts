import { Component, OnInit } from '@angular/core';
import {RedevableService} from '../../controller/service/redevable.service';
import {Redevable} from '../../controller/model/redevable.model';
import {Categorie} from '../../controller/model/categorie.model';
import {Quartier} from '../../controller/model/quartier.model';
import {Terrain} from '../../controller/model/terrain.model';
import {Achat} from '../../controller/model/achat.model';
import {Datee} from '../../controller/model/datee.model';

@Component({
  selector: 'app-redevable-create',
  templateUrl: './redevable-create.component.html',
  styleUrls: ['./redevable-create.component.css']
})
export class RedevableCreateComponent implements OnInit {
  constructor(private _redevableService: RedevableService) { }

  ngOnInit(): void {
  this._redevableService.findAllCategorie();
  this._redevableService.findAllQuartier();
     }

  get redevable(): Redevable {
    return this._redevableService.redevable;
  }
  //get typeredevable(): TypeRedevable {
   // return this._redevableService.typeredevable;
  //}
  public save() {
    this._redevableService.save();
  }
  get categories(): Array<Categorie> {
    return this._redevableService.categories;
  }

  get quarties(): Array<Quartier> {
    return this._redevableService.quarties;
  }
  get terrainsRedevable(): Terrain {
    return this._redevableService.terrainsRedevable;
  }
  public addTerrain() {
    this._redevableService.addTerrain();
  }
  get inforedevable(): String {
    return this._redevableService.inforedevable;
  }
  get titreredevable(): String {
    return this._redevableService.titreredevable;
  }
  public afficher() {
    document.getElementById('terrainform').style.display = 'inline-block';
  }
  public verifier(): boolean {
    return this._redevableService.verifier();
  }
  get findAchatByTerrainId(): void {
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
