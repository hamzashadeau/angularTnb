import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Taxetnb} from '../model/taxetnb.Model';

import {NotificationType} from '../model/notification-type.model';
import {TaxeWrapper} from '../model/taxe-wrapper.Model';
// tslint:disable:variable-name
@Injectable({
  providedIn: 'root'
})
export class TaxetnbService {
  private _terrainId: number;
  private _annee:number;
  private _taxeTNB: Taxetnb;
  private _taxeTNBList: Array<Taxetnb> = new Array<Taxetnb>();
  private _identifiant: string;
  private _taxePaye: Taxetnb;
  private _successPaye: number;
  private _taxewp: TaxeWrapper;


  get taxewp(): TaxeWrapper {
    return this._taxewp;
  }

  set taxewp(value: TaxeWrapper) {
    this._taxewp = value;
  }

  get successPaye(): number {
    return this._successPaye;
  }

  set successPaye(value: number) {
    this._successPaye = value;
  }

  get taxePaye(): Taxetnb {
    if(this._taxePaye == null) this._taxePaye == new Taxetnb();
    return this._taxePaye;
  }

  set taxePaye(value: Taxetnb) {
    this._taxePaye = value;
  }

  get annee(): number {
    return this._annee;
  }

  set annee(value: number) {
    this._annee = value;
  }

  get terrainId(): number {
    return this._terrainId;
  }

  set terrainId(value: number) {
    this._terrainId = value;
  }

  get identifiant(): string {
    return this._identifiant;
  }

  set identifiant(value: string) {
    this._identifiant = value;
  }

  constructor(private http: HttpClient) {
  }

  get taxeTNB(): Taxetnb {
    return this._taxeTNB;
  }

  set taxeTNB(value: Taxetnb) {
    this._taxeTNB = value;
  }

  get TaxeTNBList(): Array<Taxetnb> {
    return this._taxeTNBList;
  }

  set TaxeTNBList(value: Array<Taxetnb>) {
    this._taxeTNBList = value;
  }

  public findByRedevableIdentifiant(id: string) {
    this.http.get<Array<Taxetnb>>('http://localhost:8080/TNB-Api/taxetnb/findbyredevable/' + id).subscribe(
      value => {
        this.TaxeTNBList = value;
      }
    );
  }


  public PayerSim(taxe: TaxeWrapper) {
    this.http.post<Taxetnb>('http://localhost:8080/TNB-Api/taxetnb/payerSim',taxe).subscribe(
      value => {
        this.taxePaye = value;
        this.successPaye=2;
        console.log(this.taxePaye);
      }
    );
  }

  public Payer(taxe: TaxeWrapper) {
    this.http.post<number>('http://localhost:8080/TNB-Api/taxetnb/payerSim/val',taxe).subscribe(
      value => {
        this.successPaye = value;
      }
    );
  }

  public findAll() {
    this.http.get<Array<Taxetnb>>('http://localhost:8080/TNB-Api/taxetnb/findAll').subscribe(
      value => {
        this.TaxeTNBList = value;
      }
    );


  }
}
