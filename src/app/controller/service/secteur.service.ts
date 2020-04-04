import { Injectable } from '@angular/core';
import {Secteur} from '../model/secteur.model';
import {HttpClient} from '@angular/common/http';
import {Quartier} from '../model/quartier.model';
import {QuartierService} from './quartier.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecteurService {
  private _secteur: Secteur = new Secteur();
  private _selectsecteur: Secteur;
  private _secteurs: Array<Secteur>  = new Array<Secteur>();
  private _quartiers: Array<Quartier> = new Array<Quartier>();


  get secteur(): Secteur {
    return this._secteur;
  }


  set quartiers(value: Array<Quartier>) {
    this._quartiers = value;
  }

  get quartiers(): Array<Quartier> {
    if (this._quartiers==null) this._quartiers=new Array<Quartier>();
    return this._quartiers;
  }

  get selectsecteur(): Secteur {
    if (this._selectsecteur == null) { this._selectsecteur = new Secteur(); }
    return this._selectsecteur;
  }

  set selectsecteur(value: Secteur) {
    this._selectsecteur = value;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  set secteur(value: Secteur) {
    this._secteur = value;
  }

  get secteurs(): Array<Secteur> {
    return this._secteurs;
  }

  set secteurs(value: Array<Secteur>) {
    this._secteurs = value;
  }
  constructor(private http: HttpClient, private _quartierService: QuartierService) { }
  public save() {
    this.http.post('http://localhost:8080/TNB-Api/Secteur/save', this.secteur).subscribe(
      value => {
        this.SaveAllQuartiers();

      }
    );
  }
  public findAll() {
    this.http.get<Array<Secteur>>('http://localhost:8080/TNB-Api/Secteur/findAll').subscribe(
      value => {
        if (value != null) { this.secteurs = value; }

      }
    );
  }
  public  findById(id: number) {
    this.http.get<Secteur>('http://localhost:8080/TNB-Api/Secteur/findById/' + id).subscribe(
      value => this.selectsecteur = value
    );
  }
  private cloneQuartier(quartier: Quartier) {
    const myClone = new Quartier();
    myClone.id = quartier.id;
    myClone.libelle = quartier.libelle;
    return myClone;
  }
  public addQuartier() {
    if (this._quartiers == null) { this._quartiers = new Array<Quartier>(); }
    this._quartiers.push(this.cloneQuartier(this._quartierService.quartier));
    this._quartierService.quartier = null;
  }
  public saveAllQuartier(secteur: Secteur) {
    if (this.quartiers.length > 0) {
      for (const entry of this._quartiers) {
        entry.secteur = secteur;
        this._quartierService.save(entry);
      }}
  }
  public SaveAllQuartiers() {
    this.http.get<Secteur>('http://localhost:8080/TNB-Api/Secteur/findLast').subscribe(
      value => {
        this.secteur = value;
        console.log(value.id);
        if (this._quartiers.length > 0) {
          for (const entry of this._quartiers) {
            entry.secteur = this.secteur;
            this._quartierService.save(entry);
          }}
        this.quartiers=null;
      }
    );
  }

  public verifier(): boolean {
    return !this.secteur.libelle == null;
  }
}
