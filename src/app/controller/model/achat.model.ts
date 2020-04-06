import {Redevable} from './redevable.model';
import {Terrain} from './terrain.model';

export class Achat {
  public reference: string;
  public oldredevable: Redevable;
  public newRedevable: Redevable;
  public terrain: Terrain;
  public prix: number;
}
