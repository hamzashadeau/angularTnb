import {TypeRedevable} from './type-redevable.model';
import {Terrain} from './terrain.model';

export class Redevable {
  public id: number;
  public identifiant: string;
  public nom: string;
  public typeRedevable: TypeRedevable;
  public terrains = new Array<Terrain>();
}
