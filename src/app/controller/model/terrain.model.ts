import {Redevable} from './redevable.model';
import {Categorie} from './categorie.model';
import {Quartier} from './quartier.model';
import {Notification} from './notification.model';

export class Terrain {
  private _id: number;
  private _surface: string;
  private _dernierAnnePaiement: number;
  private _redevable: Redevable;
  private _quartier: Quartier;
  private _categorie: Categorie;
  private _notification: Notification ;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get surface(): string {
    return this._surface;
  }

  set surface(value: string) {
    this._surface = value;
  }

  get dernierAnnePaiement(): number {
    return this._dernierAnnePaiement;
  }

  set dernierAnnePaiement(value: number) {
    this._dernierAnnePaiement = value;
  }

  get redevable(): Redevable {
    return this._redevable;
  }

  set redevable(value: Redevable) {
    this._redevable = value;
  }

  get quartier(): Quartier {
    return this._quartier;
  }

  set quartier(value: Quartier) {
    this._quartier = value;
  }

  get categorie(): Categorie {
    return this._categorie;
  }

  set categorie(value: Categorie) {
    this._categorie = value;
  }

  get notification(): Notification {
    return this._notification;
  }

  set notification(value: Notification) {
    this._notification = value;
  }
}
