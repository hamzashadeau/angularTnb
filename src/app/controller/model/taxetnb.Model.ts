
import {Terrain} from './terrain.model';
import {NotificationDetails} from './notification-details.model';
import {Tauxtnb} from './tauxtnb.Model';
import {Redevable} from './redevable.model';
// tslint:disable:variable-name
export class Taxetnb {
  private _id: number;
  private _tauxtnb: Tauxtnb;
  private _redevable: Redevable;
  private _terrain: Terrain;
  private _annee: number;
  private _montant: number;
  private _montantRetard: number;
  private _montantTotal: number;
  private _nombreMoisRetard: number;
  private _dateTaxeTnb: Date;


  get dateTaxeTnb(): Date {
    return this._dateTaxeTnb;
  }

  set dateTaxeTnb(value: Date) {
    this._dateTaxeTnb = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get tauxtnb(): Tauxtnb {
    return this._tauxtnb;
  }

  set tauxtnb(value: Tauxtnb) {
    this._tauxtnb = value;
  }

  get redevable(): Redevable {
    return this._redevable;
  }

  set redevable(value: Redevable) {
    this._redevable = value;
  }

  get terrain(): Terrain {
    return this._terrain;
  }

  set terrain(value: Terrain) {
    this._terrain = value;
  }

  get annee(): number {
    return this._annee;
  }

  set annee(value: number) {
    this._annee = value;
  }

  get montant(): number {
    return this._montant;
  }

  set montant(value: number) {
    this._montant = value;
  }

  get montantRetard(): number {
    return this._montantRetard;
  }

  set montantRetard(value: number) {
    this._montantRetard = value;
  }

  get montantTotal(): number {
    return this._montantTotal;
  }

  set montantTotal(value: number) {
    this._montantTotal = value;
  }

  get nombreMoisRetard(): number {
    return this._nombreMoisRetard;
  }

  set nombreMoisRetard(value: number) {
    this._nombreMoisRetard = value;
  }
}
