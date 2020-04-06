import { Component, OnInit } from '@angular/core';
import {Redevable} from '../../controller/model/redevable.model';
import {RedevableService} from '../../controller/service/redevable.service';
import {Terrain} from '../../controller/model/terrain.model';
import {Achat} from '../../controller/model/achat.model';

@Component({
  selector: 'app-redevable-liste',
  templateUrl: './redevable-liste.component.html',
  styleUrls: ['./redevable-liste.component.css']
})
export class RedevableListeComponent implements OnInit {

  constructor(private redevableService: RedevableService) { }

  ngOnInit(): void {
    this.redevableService.findAll();
  }
  get terrains(): Array<Terrain> {
    return this.redevableService.terrains;
  }
  get redevables(): Array<Redevable> {
    return this.redevableService.redevables;
  }
  get redevable(): Redevable {
    return this.redevableService.redevable;
  }
  deleteByReference(c: Redevable) {
    return this.redevableService.deleteByReference(c);
  }
  findTerrainItemByRedevable(c: Redevable) {
    return this.redevableService.findTerrainItemByRedevable(c);
  }
  get achat(): Achat {
    return this.redevableService.achat;
  }
  saveAchat() {
    this.redevableService.saveAchat();
  }
   get titreachat(): String {
    return this.redevableService.titreachat;
  }
  get infoachat(): String {
    return this.redevableService.infoachat;
  }
  public verifierachat(): boolean {
  return this.redevableService.verifierachat();
  }
  public findTerrainRedevable(iden: string): void {
    return this.redevableService.findTerrainByRedevableId(iden);
  }
  get redevableId(): string {
    return this.redevableService.redevableId;
  }
  public selectionerTerrain(event) {
    console.log('ha howa terrain:' + this.achat.terrain.id);
    this.achat.terrain.id = event.target.value;
  }
  public selectionerRedevable(event) {
    console.log('ha howa newredevable:' + this.achat.newRedevable.identifiant);
    this.achat.newRedevable.identifiant = event.target.value;
  }
}
