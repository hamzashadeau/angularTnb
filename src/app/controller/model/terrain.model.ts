import {Redevable} from './redevable.model';
import {Categorie} from './categorie.model';
import {Quartier} from './quartier.model';

export class Terrain {
  public id: number;
  public surface: string;
  public dernierAnnePaiement: number;
  public redevable: Redevable;
  public quartier: Quartier;
  public categorie: Categorie;
}
