import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Tauxtnb} from '../model/tauxtnb.Model';
import {Categorie} from '../model/categorie.model';
import {newArray} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class TauxtnbService {
private _allTauxTNB: Array<Tauxtnb>;
private _listTauxTNB: Array<Tauxtnb>;
private _tauxTNB: Tauxtnb;
private _tauxTNBSave: Tauxtnb;
private _categorie: Categorie;
private _surface: number;
private _date : Date;
private _categorieID : number;


  get categorieID(): number {
    return this._categorieID;
  }

  set categorieID(value: number) {
    this._categorieID = value;
  }

  get allTauxTNB(): Array<Tauxtnb> {
    return this._allTauxTNB;
  }

  set allTauxTNB(value: Array<Tauxtnb>) {
    this._allTauxTNB = value;
  }

  get listTauxTNB(): Array<Tauxtnb> {
    return this._listTauxTNB;
  }

  set listTauxTNB(value: Array<Tauxtnb>) {
    this._listTauxTNB = value;
  }

  get tauxTNB(): Tauxtnb {
    return this._tauxTNB;
  }

  set tauxTNB(value: Tauxtnb) {
    this._tauxTNB = value;
  }

  get tauxTNBSave(): Tauxtnb {
    return this._tauxTNBSave;
  }

  set tauxTNBSave(value: Tauxtnb) {
    this._tauxTNBSave = value;
  }

  get categorie(): Categorie {
    return this._categorie;
  }

  set categorie(value: Categorie) {
    this._categorie = value;
  }

  get surface(): number {
    return this._surface;
  }

  set surface(value: number) {
    this._surface = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  constructor(private http: HttpClient) { }

  public findAll() {
    this.http.get<Array<Tauxtnb>>('http://localhost:8080/TNB-Api/tauxtnb/findAll').subscribe(
      value => {
        this.allTauxTNB = value;
      }
    );

  }
  public findBySurface(surf : number) {
    this.http.post<Array<Tauxtnb>>('http://localhost:8080/TNB-Api/tauxtnb/findBySurface/'+surf,null).subscribe(
      value => {
        this.listTauxTNB = value;
      }
    );

  }

  public findByDate( datee : Date) {
    let datestr: string = datee.toString();
    console.log(datestr);
    this.http.post<Array<Tauxtnb>>('http://localhost:8080/TNB-Api/tauxtnb/findByDate/'+datestr,null,{ headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).subscribe(
      value => {
        this.listTauxTNB = value;
      }
    );

  }
  public findByCategorie( cat : Categorie) {
    this.http.post<Array<Tauxtnb>>('http://localhost:8080/TNB-Api/tauxtnb/findByCategorie',cat).subscribe(
      value => {
        this.listTauxTNB = value;
      }
    );

  }
  public findByEverything( catid : number,surf :number,daatee : Date) {
    let datestr: string = daatee.toString();
    console.log(datestr);
    let url = 'http://localhost:8080/TNB-Api/tauxtnb/findBySurfaceAndDateandid/surface/'+surf+'/id/'+catid+'/date/'+datestr+"/";
    this.http.post<Array<Tauxtnb>>(url,null).subscribe(
      value => {
        this.listTauxTNB = value;
      }
    );

  }

  findByCategorieId(categorieID: number) {
    this.http.post<Array<Tauxtnb>>('http://localhost:8080/TNB-Api/tauxtnb/findByCategorieId/'+categorieID,null).subscribe(
      value => {
        this.listTauxTNB = value;
      }
    );
  }
}
