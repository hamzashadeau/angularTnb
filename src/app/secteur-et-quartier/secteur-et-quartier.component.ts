import { Component, OnInit } from '@angular/core';
import {RedevableService} from '../controller/service/redevable.service';
import {SecteurService} from '../controller/service/secteur.service';
import {QuartierService} from '../controller/service/quartier.service';
import {Redevable} from '../controller/model/redevable.model';
import {Secteur} from '../controller/model/secteur.model';
import {Quartier} from '../controller/model/quartier.model';
import {Terrain} from '../controller/model/terrain.model';

@Component({
  selector: 'app-secteur-et-quartier',
  templateUrl: './secteur-et-quartier.component.html',
  styleUrls: ['./secteur-et-quartier.component.css']
})
export class SecteurEtQuartierComponent implements OnInit {
  private _selectedSecteur: Secteur = new Secteur();
  constructor(private _secteurService: SecteurService, private _quartierService: QuartierService) { }

  ngOnInit(): void {
    this._secteurService.findAll();
    this._quartierService.findAll();
    this._selectedSecteur = this.setDefault();
  }

  get selectedSecteur(): Secteur {
    return this._selectedSecteur;
  }

  set selectedSecteur(value: Secteur) {
    this._selectedSecteur = value;
  }

  public saveSecteur() {
    return this._secteurService.save();
  }
  get listQuartiers() : Array<Quartier>{
    return this._secteurService.quartiers;
  }
  get secteur(): Secteur {
    return this._secteurService.secteur;
  }
  get secteurs(): Array<Secteur> {
    return this._secteurService.secteurs;
  }
  get quartier(): Quartier {
    return this._quartierService.quartier;
  }

  get quartiers(): Array<Quartier> {
    return this._quartierService.quartiers;
  }

  public afficher() {
    for (let i = 1; i < 3 ; i++) {
      if (document.getElementById('quartierform' + i).style.display === 'none') {
        document.getElementById('quartierform' + i).style.display = 'inline-block';
      } else { document.getElementById('quartierform' + i).style.display = 'none'; }
    }
  }

  public saveQuartiers(){
    this._secteurService.saveAllQuartier(this._selectedSecteur);
  }
  public addQuartier() {
    this._secteurService.addQuartier();
  }

  public verifierSecteur() {
    return this._secteurService.verifier();
  }
  public verifierQuartier() {
    return this._quartierService.verifier();
  }
  public selectioner() {
    console.log(this._selectedSecteur);


  }


  private setDefault() {
    if (this.secteurs.length>0){
      return this.secteurs[0];
    }else {
      return null;
    }
  }

  afficherCreation() {
    // tslint:disable-next-line:triple-equals
    if (document.getElementById('createnew').className == 'd-none') {
      document.getElementById('createnew').className = '';
      document.getElementById('new').className = 'card-footer';
      document.getElementById('exist').className = 'd-none';
      document.getElementById('existing').className = 'd-none';
      this._secteurService.quartiers =null;
      console.log('passed');
    }
  }

  afficherExistant() {

    // tslint:disable-next-line:triple-equals
    if (document.getElementById('exist').className == 'd-none') {
      document.getElementById('exist').className = '';
      document.getElementById('existing').className = 'card-footer';
      document.getElementById('createnew').className = 'd-none';
      document.getElementById('new').className = 'd-none';
      this._secteurService.quartiers =null;
      console.log('passed');
    }

  }
}
