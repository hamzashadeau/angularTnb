import {Categorie} from './categorie.model';
// tslint:disable:variable-name
export class Tauxtnb {
  private _id: number;
  private _categorie: Categorie;
  private _surfaceMax: number;
  private _surfaceMin: number;
  private _montant: number;
  private _montantRetard: number;
  private _dateApp: Date;
  private _dateFinApp: Date;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get categorie(): Categorie {
    return this._categorie;
  }

  set categorie(value: Categorie) {
    this._categorie = value;
  }

  get surfaceMax(): number {
    return this._surfaceMax;
  }

  set surfaceMax(value: number) {
    this._surfaceMax = value;
  }

  get surfaceMin(): number {
    return this._surfaceMin;
  }

  set surfaceMin(value: number) {
    this._surfaceMin = value;
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

  get dateApp(): Date {
    return this._dateApp;
  }

  set dateApp(value: Date) {
    this._dateApp = value;
  }

  get dateFinApp(): Date {
    return this._dateFinApp;
  }

  set dateFinApp(value: Date) {
    this._dateFinApp = value;
  }
}
