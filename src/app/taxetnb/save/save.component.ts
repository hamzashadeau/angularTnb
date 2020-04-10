import { Component, OnInit } from '@angular/core';
import {TaxetnbService} from '../../controller/service/taxetnb.service';
import {TerrainService} from '../../controller/service/terrain.service';
import {Terrain} from '../../controller/model/terrain.model';
import {Taxetnb} from '../../controller/model/taxetnb.Model';
import {TaxeWrapper} from '../../controller/model/taxe-wrapper.Model';
import {TerrainWrapper} from '../../controller/mode/terrain-wrapper.Model';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  constructor(private _taxetnbservice: TaxetnbService, private _terrainService:TerrainService) { }

  ngOnInit(): void {
  this.findAll();
  }
  get successPaye(): number {
    return this.taxetnbservice.successPaye;
  }

  set successPaye(value: number) {
    this.taxetnbservice.successPaye = value;
  }
  get taxewp(): TaxeWrapper {
    return this.taxetnbservice.taxewp;
  }

  set taxewp(value: TaxeWrapper) {
    this.taxetnbservice.taxewp = value;
  }
  get taxePaye(): Taxetnb {
    return this.taxetnbservice.taxePaye;
  }

  set taxePaye(value: Taxetnb) {
    this.taxetnbservice.taxePaye = value;
  }

  get annee(): number {
    return this.taxetnbservice.annee;
  }

  set annee(value: number) {
    this.taxetnbservice.annee = value;
  }
  get TerrainId(): number {
    return this.taxetnbservice.terrainId;
  }

  set TerrainId(value: number) {
    this.taxetnbservice.terrainId = value;
  }
  get taxetnbservice(): TaxetnbService {
    return this._taxetnbservice;
  }

  set taxetnbservice(value: TaxetnbService) {
    this._taxetnbservice = value;
  }

  get terrainService(): TerrainService {
    return this._terrainService;
  }

  set terrainService(value: TerrainService) {
    this._terrainService = value;
  }

  get terrainList(): Array<Terrain> {
    return this.terrainService.terrainList;
  }

  set terrainList(value: Array<Terrain>) {
    this.terrainService.terrainList = value;
  }
  public findTerrainsByRedId(event: any) {
    this.terrainService.findTerrainByRedId(event.target.value);
  }

  public payerSim() {
    this.taxewp= new TaxeWrapper();
    this.taxewp.terrain= new TerrainWrapper();
    this.taxewp.annee=this.annee;
    this.taxewp.terrain.id=this.TerrainId;

    this.taxetnbservice.PayerSim(this.taxewp);


  }

  public payer() {
    this.taxewp= new TaxeWrapper();
    this.taxewp.terrain= new TerrainWrapper();
    this.taxewp.annee=this.annee;
    this.taxewp.terrain.id=this.TerrainId;

    this.taxetnbservice.Payer(this.taxewp);

  }

  private findAll() {
    this.terrainService.findAll();
  }
}
