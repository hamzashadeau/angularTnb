import { Injectable } from '@angular/core';
import {Redevable} from '../model/redevable.model';
import {HttpClient} from '@angular/common/http';
import {TypeRedevable} from '../model/type-redevable.model';
import {Terrain} from '../model/terrain.model';
import {Achat} from '../model/achat.model';
import {Categorie} from '../model/categorie.model';
import {Quartier} from '../model/quartier.model';
import {Datee} from '../model/datee.model';


@Injectable({
  providedIn: 'root'
})
export class RedevableService {

  private _redevable: Redevable ;
  private _typeredevable: TypeRedevable;
  private _redevables: Array<Redevable>;
  private _terrains: Array<Terrain>;
  private _terrainAchatID: Terrain;
  private _terrainsRedevable: Terrain;
  private _achat: Achat;
  private _inforedevable: String;
  private _titreredevable: String;
  private _infoachat: String;
  private _titreachat: String;
  private _categories: Array<Categorie>;
  private _quarties: Array<Quartier>;
  private _achatTerrain: Array<Achat>;
  private c: Terrain;
  private _terrainId: number;
  private _date: Datee;
private _result: string;
  constructor(private http: HttpClient) { }

  public save() {
    this.http.post<number>('http://localhost:8080/TNB-Api/Redevable/save', this.redevable).subscribe(
      data => {
        if (data === -1) {
          this._titreredevable = ' ';
          this._inforedevable = 'ce redevable est dejaa existe';
          document.getElementById('header').style.color = 'red';
        } else if (data === -2) {
          this._titreredevable = ' ';
          this._inforedevable = 'le type redevable non existe';
          document.getElementById('header').style.color = 'red';
        }
        if (data > 0) {
        console.log('success');
        }
      }, eror => {
        console.log('eroro');
      }
    );
  }
  public addTerrain() {
    this.redevable.terrains.push(this.cloneTerrain(this.terrainsRedevable));
    this.terrainsRedevable = null;
  }
  public  deleteByReference(c: Redevable) {
    this.http.delete<number>('http://localhost:8080/TNB-Api/Redevable/deletebyidentifiant/' + c.identifiant).subscribe(
      data => {
        console.log('delete sucess' + data);
        this.findAll();
      }
    );
  }
public findTerrainItemByRedevable(c: Redevable) {
  this.http.get<Array<Terrain>>( 'http://localhost:8080/TNB-Api/Terrain/findByRedevableIdentifiant/' + c.identifiant).subscribe(
    data => {
      this.terrains = data ;
      console.log('ha data ' + data);
    }, error => {
      console.log('ana eroroa');
    }
  );
}
  public findTerrainByRedevableId(c: string) {
    this.http.get<Array<Terrain>>( 'http://localhost:8080/TNB-Api/Terrain/findByRedevableIdentifiant/' + c).subscribe(
      data => {
        this.result = ' <select name="Terrain" (change)="selectionerTerrain($event)">';
        console.log(data);
        this.terrains = data;
        this.terrains.forEach( e => {
          this._result += '<option value="';
          this._result +=  e.id ;
          this._result += '">';
          this._result += e.id ;
          this._result += '</option>';
          console.log(e.id);
        });
        this._result += '</select>';
        document.getElementById('listedeterrain').innerHTML = this._result;
        console.log('ha data ' + data);
        console.log(this._result);
      }, error => {
        console.log('ana eroroa');
      }
    );
  }
public findAll() {
    this.http.get<Array<Redevable>>('http://localhost:8080/TNB-Api/Redevable/findall').subscribe(
      data => {
        if (data != null) {
          this._redevables = data;
        }
      }, eror => {
        console.log('eroro');
      }
    );
  }
  public findAllCategorie() {
    this.http.get<Array<Categorie>>('http://localhost:8080//TNB-Api/Categorie/findAll').subscribe(
      data => {
        if (data != null) {
          this._categories = data;
        }
      }, eror => {
        console.log('eroro');
      }
    );
  }
  public findAllQuartier() {
    this.http.get<Array<Quartier>>('http://localhost:8080/TNB-Api/Quartier/findAll').subscribe(
      data => {
        if (data != null) {
          this._quarties = data;
        }
      }, eror => {
        console.log('eroro');
      }
    );
  }
  public findAchatByTerrainId() {
    this.http.get<Array<Achat>>('http://localhost:8080/TNB-Api/Achat/findByTerrainId/id/' + this.terrainId).subscribe(
      data => {
        if (data != null) {
          this._achatTerrain = data;
        }
      }, eror => {
        console.log('eroro');
      }
    );
  }
  public findAchatByoldRedevableId() {
    this.http.get<Array<Achat>>('http://localhost:8080/TNB-Api/Achat/findByOldredevableId/id/' + this.terrainId).subscribe(
      data => {
        if (data != null) {
          this._achatTerrain = data;
        }
      }, eror => {
        console.log('eroro');
      }
    );
  }
  public findAchatByNewRedevableId() {
    this.http.get<Array<Achat>>('http://localhost:8080/TNB-Api/Achat/findByNewredevableId/id/' + this.terrainId).subscribe(
      data => {
        if (data != null) {
          this._achatTerrain = data;
        }
      }, eror => {
        console.log('eroro');
      }
    );
  }
  public findAchatBydateAchat() {
    this.http.get<Array<Achat>>('http://localhost:8080//TNB-Api/Achat/findByDateachat/dateachat/' + this.date.date).subscribe(
      data => {
        if (data != null) {
          this._achatTerrain = data;
        }
      }, eror => {
        console.log('eroro');
      }
    );
  }
  public saveAchat() {
    this.http.put<number>('http://localhost:8080/TNB-Api/Achat/acheterTerrain', this.achat).subscribe(
      data => {
        if (data === -1) {
          this._titreachat = ' ';
          this._infoachat = 'le terrain est introvable';
          document.getElementById('acheter').style.color = 'red';
        }
        else if (data === -2) {
          this._titreachat = ' ';
          this._infoachat = 'ce terrain n existe pas dans la liste de terrain de ce redevable';
          document.getElementById('acheter').style.color = 'red';
        }
        else if (data === -3) {
          this._titreachat = ' ';
          this._infoachat = 'le oldredevable est introvable';
          document.getElementById('acheter').style.color = 'red';
        }
        else if (data === -4){
          this._titreachat = ' ';
          this._infoachat = 'le newredevable est introvable';
          document.getElementById('acheter').style.color = 'red';
        }
        else if (data === -5){
          this._titreachat = ' ';
          this._infoachat = 'le oldredevable est le newredevable';
          document.getElementById('acheter').style.color = 'red';
        }else if (data === -6) {
          this._titreachat = ' ';
          this._infoachat = 'le terrain a des taxes a payer ';
          document.getElementById('acheter').style.color = 'red';
        }
        if (data > 0) {
          this.findAll();
          console.log('success');
        }
      }, eror => {
        console.log('eroro');
      }
    );
  }
  get redevable(): Redevable {
    if (this._redevable == null) {
      this._redevable = new Redevable();
      this._redevable.typeRedevable = new TypeRedevable();
    }
    return this._redevable;
  }

  set redevable(value: Redevable) {
    this._redevable = value;
  }

  get typeredevable(): TypeRedevable {
    if (this._typeredevable == null) {
      this._typeredevable = new TypeRedevable();
    }
    return this._typeredevable;
  }

  set typeredevable(value: TypeRedevable) {
    this._typeredevable = value;
  }

  get redevables(): Array<Redevable> {
if (this._redevables == null) {
  this._redevables = new Array<Redevable>();
}
return this._redevables;
  }

  set redevables(value: Array<Redevable>) {
    this._redevables = value;
  }

  get terrains(): Array<Terrain> {
 if (this._terrains == null) {
   this.terrains = new Array<Terrain>();
   for (let c of this.terrains) {
     c.redevable = new Redevable();
   }
 }
 return this._terrains;
  }

  set terrains(value: Array<Terrain>) {
    this._terrains = value;
  }

  get achat(): Achat {
    if (this._achat == null) {
    this._achat = new Achat();
    this._achat.terrain = new Terrain();
    this._achat.newRedevable = new Redevable();
    this._achat.oldredevable = new Redevable();
    }
    return this._achat;
  }

  set achat(value: Achat) {
    this._achat = value;
  }

  get categories(): Array<Categorie> {
 if (this._categories == null) {
  this._categories = new Array<Categorie>(); }
 return this._categories;
  }

  get quarties(): Array<Quartier> {
    if (this._quarties == null) {
      this._quarties = new Array<Quartier>(); }
    return this._quarties;
  }

  set quarties(value: Array<Quartier>) {
    this._quarties = value;
  }

  get terrainsRedevable(): Terrain {
    if (this._terrainsRedevable == null) {
      this._terrainsRedevable = new Terrain();
      this._terrainsRedevable.redevable = new Redevable();
      this._terrainsRedevable.categorie = new Categorie();
      this._terrainsRedevable.quartier = new Quartier();
    }
    return this._terrainsRedevable;
  }
  private cloneTerrain(terrain: Terrain) {
    const myClone = new Terrain();
    myClone.id = terrain.id;
    myClone.surface = terrain.surface;
    myClone.dernierAnnePaiement = terrain.dernierAnnePaiement;
    myClone.quartier = terrain.quartier;
    myClone.categorie = terrain.categorie;
    return myClone;
  }
  public verifier(): boolean {
    if ( this._redevable.nom != null && this._redevable.identifiant != null && this._redevable.typeRedevable != null) {
      return true;
    } else  {
      return  false;
    }
  }
  public verifierachat(): boolean{
    if (this._achat.id != null && this._achat.oldredevable != null && this._achat.newRedevable != null && this._achat.prix != null && this._achat.terrain != null) {
      return true;
    } else  {
      return  false;
    }
  }
  set terrainsRedevable(value: Terrain) {
    this._terrainsRedevable = value;
  }

  get inforedevable(): String {
    if (this._inforedevable == null) {
      this._inforedevable = new String();
    }
    return this._inforedevable;
  }


  get titreredevable(): String {
    if (this._titreredevable == null) {
      this._titreredevable = new String('ajouter un redevable');
    }
    return this._titreredevable;
  }

  set titreredevable(value: String) {
    this._titreredevable = value;
  }

  get titreachat(): String {
    if (this._titreachat == null) {
      this._titreachat = new String('acheter un terrain');
    }
    return this._titreachat;
  }

  set titreachat(value: String) {
    this._titreachat = value;
  }

  get infoachat(): String {
    if (this._infoachat == null) {
      this._infoachat = new String();
    }
    return this._infoachat;
  }

  set infoachat(value: String) {
    this._infoachat = value;
  }


  get achatTerrain(): Array<Achat> {
    if (this._achatTerrain == null) {
      this._achatTerrain = new Array<Achat>();
      this._achatTerrain.forEach(achatt => {
       achatt = new Achat();
       achatt.terrain = new Terrain();
       achatt.newRedevable = new Redevable();
       achatt.oldredevable = new Redevable();
     });
    }
    return this._achatTerrain;
  }

  set achatTerrain(value: Array<Achat>) {
    this._achatTerrain = value;
  }

  get terrainId(): number {
    this._terrainId = this.terrainAchatID.id;
    return this._terrainId;
  }

  set terrainId(value: number) {
    this._terrainId = value;
  }

  get terrainAchatID(): Terrain {
    if (this._terrainAchatID == null) {
      this._terrainAchatID = new Terrain();
      this._terrainAchatID.redevable = new Redevable();
      this._terrainAchatID.categorie = new Categorie();
      this._terrainAchatID.quartier = new Quartier();
    }
    return this._terrainAchatID;
  }

  set terrainAchatID(value: Terrain) {
    this._terrainAchatID = value;
  }

  get date(): Datee {
    if (this._date == null) {
      this._date = new Datee();
    }
    console.log(this._date.date);
    return this._date;
  }

  set date(value: Datee) {
    this._date = value;
  }

  get result(): string {
    return this._result;
  }

  set result(value: string) {
    this._result = value;
  }
}
