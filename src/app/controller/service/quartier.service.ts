import { Injectable } from '@angular/core';
import {Quartier} from '../model/quartier.model';
import {Secteur} from '../model/secteur.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuartierService {
  private _quartier:Quartier = new Quartier();
  private _secteur:Secteur;
  private _quartiers: Array<Quartier> = new Array<Quartier>();

  constructor(private http: HttpClient) { }

  get quartier(): Quartier {
    if (this._quartier==null) this._quartier=new Quartier();
    return this._quartier;
  }

  set quartier(value: Quartier) {
    this._quartier = value;
  }

  get secteur(): Secteur {
    return this._secteur;
  }

  set secteur(value: Secteur) {
    this._secteur = value;
  }

  get quartiers(): Array<Quartier> {
    return this._quartiers;
  }

  set quartiers(value: Array<Quartier>) {
    this._quartiers = value;
  }

  public save(quartier : Quartier){
    this.http.post('http://localhost:8080/TNB-Api/Quartier/save', quartier).subscribe(
      value =>{
        if (value== -2){
          console.log('ce secteur n\'existe pas');
        }
        this.findAll();
      }, error => console.log('erreur') );

  }
  public findAll(){
    this.http.get<Array<Quartier>>('http://localhost:8080/TNB-Api/Quartier/findAll').subscribe(
      value => {
        if (value != null) { this.quartiers = value; }

      }
    );
  }
  public verifier(): boolean {
    return !this.quartier.libelle == null;
  }
}
