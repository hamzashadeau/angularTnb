import {TypeRedevable} from './type-redevable.model';
import {Terrain} from './terrain.model';

export class Redevable {
  private _id: number;
  private _identifiant: string;
  private _nom: string;
  private _typeRedevable: TypeRedevable;
  private _terrains: Array<Terrain> = new Array<Terrain>();

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get identifiant(): string {
    return this._identifiant;
  }

  set identifiant(value: string) {
    this._identifiant = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get typeRedevable(): TypeRedevable {
    return this._typeRedevable;
  }

  set typeRedevable(value: TypeRedevable) {
    this._typeRedevable = value;
  }


  get terrains(): Array<Terrain> {
    return this._terrains;
  }

  set terrains(value: Array<Terrain>) {
    this._terrains = value;
  }
}
