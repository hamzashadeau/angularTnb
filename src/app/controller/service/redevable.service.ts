import {Injectable} from '@angular/core';
import {Redevable} from '../model/redevable.model';
import {HttpClient} from '@angular/common/http';
import {TypeRedevable} from '../model/type-redevable.model';
import {Terrain} from '../model/terrain.model';
import {Achat} from '../model/achat.model';
import {Categorie} from '../model/categorie.model';
import {Quartier} from '../model/quartier.model';
import {Datee} from '../model/datee.model';
import {Observable} from 'rxjs';
import {TerrainService} from './terrain.service';
import {NotificationType} from '../model/notification-type.model';


@Injectable({
  providedIn: 'root'
})
export class RedevableService {

  constructor(private http: HttpClient) {
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
      this._categories = new Array<Categorie>();
    }
    return this._categories;
  }

  get quarties(): Array<Quartier> {
    if (this._quarties == null) {
      this._quarties = new Array<Quartier>();
    }
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

  // tslint:disable-next-line:adjacent-overload-signatures
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

  // tslint:disable-next-line:variable-name
  private _redevable: Redevable;
  private _typeredevable: TypeRedevable;
  private _redevables: Array<Redevable>;
  private _redevablesNp: Array<Redevable> = new Array<Redevable>();
  private _redevablesNotifs: Array<Redevable> = new Array<Redevable>();
  private _terrains: Array<Terrain>;
  private _terrainsNp: Array<Terrain>;
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
<<<<<<< Updated upstream
  private _notifType: NotificationType;


  get notifType(): NotificationType {
    return this._notifType;
  }

  set notifType(value: NotificationType) {
    this._notifType = value;
  }

  get redevablesNotifs(): Array<Redevable> {
    return this._redevablesNotifs;
  }

  set redevablesNotifs(value: Array<Redevable>) {
    this._redevablesNotifs = value;
  }
=======
  private _resultQuartier: string;
  private _resultcategorie: string;
  private _redevableId: string;
  private _redevableIdentifiant: string;
  private _typeredevableresult: string;
  private _redevableresult: string;
  private _typeredevables: Array<TypeRedevable>;
  constructor(private http: HttpClient) { }
>>>>>>> Stashed changes

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

  public deleteByReference(c: Redevable) {
    this.http.delete<number>('http://localhost:8080/TNB-Api/Redevable/deletebyidentifiant/' + c.identifiant).subscribe(
      data => {
        console.log('delete sucess' + data);
        this.findAll();
      }
    );
  }
<<<<<<< Updated upstream

  public findTerrainItemByRedevable(c: Redevable) {
    this.http.get<Array<Terrain>>('http://localhost:8080/TNB-Api/Terrain/findByRedevableIdentifiant/' + c.identifiant).subscribe(
      data => {
        this.terrains = data;
        console.log('ha data ' + data);
      }, error => {
        console.log('ana eroroa');
      }
    );
  }

=======
public findTerrainItemByRedevable(c: Redevable) {
  this.http.get<Array<Terrain>>( 'http://localhost:8080/TNB-Api/Terrain/findByRedevableIdentifiant/' + c.identifiant).subscribe(
    data => {
      this.terrains = data ;
      this.redevableId = c.identifiant;
      console.log('ha data ' + data);
    }, error => {
      console.log('ana eroroa');
    }
  );
}
>>>>>>> Stashed changes
  public findTerrainByRedevableId(c: string) {
    this.http.get<Array<Terrain>>('http://localhost:8080/TNB-Api/Terrain/findByRedevableIdentifiant/' + c).subscribe(
      data => {
        console.log(data);
        this._result += ' <option value="#">select un terrain</option>';
        this.terrains = data;
<<<<<<< Updated upstream
        this.terrains.forEach(e => {
=======
        this._redevableId = c;
        this.findAll();
        document.getElementById('head').style.display = 'block';
        this.terrains.forEach( e => {
>>>>>>> Stashed changes
          this._result += '<option value="';
          this._result += e.id;
          this._result += '">';
          this._result += e.id;
          this._result += '</option>';
        });
        document.getElementById('terrainresult').innerHTML += this._result;
        console.log('ha data ' + data);
      }, error => {
        console.log('ana eroroa');
      }
    );
  }

  public findAll() {
    this.http.get<Array<Redevable>>('http://localhost:8080/TNB-Api/Redevable/findall').subscribe(
      data => {
        if (data != null) {
          this._redevableresult = ' <option value="#">select lidentifiant du nouveau redevable </option>';
          this._redevables = data;
          this._redevables.forEach( e => {
            if (e.identifiant !== this._redevableId) {
        this._redevableresult += '<option value="';
        this._redevableresult +=  e.identifiant ;
        this._redevableresult += '">';
        this._redevableresult += e.identifiant ;
        this._redevableresult += '</option>';
            }
      });
          document.getElementById('Redevableresult').innerHTML = this._redevableresult;
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
          this._resultcategorie = '<option value="#"> selectioner un id categorie</option>';
          this._categories.forEach(e => {
            this._resultcategorie += '<option value="';
            this._resultcategorie +=  e.id ;
            this._resultcategorie += '">';
            this._resultcategorie += e.id ;
            this._resultcategorie += '</option>';
            document.getElementById('quartierid').innerHTML = this._resultcategorie;
          });
        }
      }, eror => {
        console.log('eroro');
      }
    );
  }
<<<<<<< Updated upstream
=======
  public findAlltypeeredevable() {
    this.http.get<Array<TypeRedevable>>('http://localhost:8080/TNB-Api/typeredevable/findall').subscribe(
      data => {
        if (data != null) {
          this._typeredevables = data;
          // tslint:disable-next-line:max-line-length
          this._typeredevableresult = ' <select name="Typeredevable" id="typeresult" class="col-8" (change)="selectionerTyperedevable($event)">';
          this._typeredevableresult += '<option value="#"> selectioner un type redevable</option>';
          this._typeredevables.forEach(e => {
            this._typeredevableresult += '<option value="';
            this._typeredevableresult +=  e.libelle ;
            this._typeredevableresult += '">';
            this._typeredevableresult += e.libelle ;
            this._typeredevableresult += '</option>';
            document.getElementById('typreredevable').innerHTML = this.typeredevableresult;
          });
        }
      }, eror => {
        console.log('eroro');
      }
    );
  }
>>>>>>> Stashed changes

  public findAllQuartier() {
    this.http.get<Array<Quartier>>('http://localhost:8080/TNB-Api/Quartier/findAll').subscribe(
      data => {
        if (data != null) {
          this._quarties = data;
          this._resultQuartier = '<option value="#"> selectioner un id quartier</option>';
          this._quarties.forEach(e => {
            this._resultQuartier += '<option value="';
            this._resultQuartier +=  e.id ;
            this._resultQuartier += '">';
            this._resultQuartier += e.id ;
            this._resultQuartier += '</option>';
            document.getElementById('categorieid').innerHTML = this._resultQuartier;
          });
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

  public findTerrainsRedevableNp() {
    this.http.get<Array<Redevable>>('http://localhost:8080/TNB-Api/Redevable/findAllRedevablesWithTerrainsNp').subscribe(
      value => {
        this.redevablesNp = value;
      }
    );
    console.log(this.redevablesNp);
  }

  public findRedevableTerrainsNotifType() {
    const id = this.notifType == null ? -1 : this.notifType.id;
    this.http.get<Array<Redevable>>('http://localhost:8080/TNB-Api/Redevable/findAllRedevablesWithNotifs/' + id).subscribe(
      value => {
        this.redevablesNotifs = value;
      }
    );
    console.log(this.redevablesNotifs);
  }


  get redevablesNp(): Array<Redevable> {
    return this._redevablesNp;
  }

  set redevablesNp(value: Array<Redevable>) {
    this._redevablesNp = value;
  }

  public saveAchat() {
    this.http.put<number>('http://localhost:8080/TNB-Api/Achat/acheterTerrain', this.achat).subscribe(
      data => {
        if (data === -1) {
          this._titreachat = ' ';
          this._infoachat = 'le terrain est introvable';
          document.getElementById('acheter').style.color = 'red';
        } else if (data === -2) {
          this._titreachat = ' ';
          this._infoachat = 'ce terrain n existe pas dans la liste de terrain de ce redevable';
          document.getElementById('acheter').style.color = 'red';
        } else if (data === -3) {
          this._titreachat = ' ';
          this._infoachat = 'le oldredevable est introvable';
          document.getElementById('acheter').style.color = 'red';
        } else if (data === -4) {
          this._titreachat = ' ';
          this._infoachat = 'le newredevable est introvable';
          document.getElementById('acheter').style.color = 'red';
        } else if (data === -5) {
          this._titreachat = ' ';
          this._infoachat = 'le oldredevable est le newredevable';
          document.getElementById('acheter').style.color = 'red';
        } else if (data === -6) {
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
<<<<<<< Updated upstream
=======
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
   for (const c of this.terrains) {
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
>>>>>>> Stashed changes

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
    if (this._redevable.nom != null && this._redevable.identifiant != null && this._redevable.typeRedevable != null) {
      return true;
    } else {
      return false;
    }
  }
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  public verifierachat(): boolean {
    // tslint:disable-next-line:max-line-length
    console.log(this._achat.reference);
    console.log(this._achat.oldredevable.identifiant);
    console.log(this._achat.newRedevable.identifiant);
    console.log(this._achat.prix);
    console.log(this._achat.terrain.id);
    if (this._achat.reference !== null && this._achat.oldredevable.identifiant !== null && this._achat.newRedevable.identifiant !== null && this._achat.prix != null && this._achat.terrain.id != null) {
      return true;
    } else {
      return false;
    }
  }


<<<<<<< Updated upstream
=======
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

  get resultQuartier(): string {
    return this._resultQuartier;
  }

  set resultQuartier(value: string) {
    this._resultQuartier = value;
  }

  get resultcategorie(): string {
    return this._resultcategorie;
  }

  set resultcategorie(value: string) {
    this._resultcategorie = value;
  }

  get redevableId(): string {
    return this._redevableId;
  }

  set redevableId(value: string) {
    this._redevableId = value;
  }

  get typeredevableresult(): string {
    return this._typeredevableresult;
  }

  set typeredevableresult(value: string) {
    this._typeredevableresult = value;
  }

  get typeredevables(): Array<TypeRedevable> {
    if (this._typeredevables == null) {
  this._typeredevables.forEach( e => {
    e = new TypeRedevable();
  });
}
    return this._typeredevables;
  }

  set typeredevables(value: Array<TypeRedevable>) {
    this._typeredevables = value;
  }

  get redevableresult(): string {
    return this._redevableresult;
  }

  set redevableresult(value: string) {
    this._redevableresult = value;
  }

  get redevableIdentifiant(): string {
    return this._redevableIdentifiant;
  }

  set redevableIdentifiant(value: string) {
    this._redevableIdentifiant = value;
  }
>>>>>>> Stashed changes
}
