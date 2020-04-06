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

}
