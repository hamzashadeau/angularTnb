import { Injectable } from '@angular/core';
import {Categorie} from '../model/categorie.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {
 private _allCategories: Array<Categorie>;

  constructor(private http: HttpClient) { }


  get allCategories(): Array<Categorie> {
    return this._allCategories;
  }

  set allCategories(value: Array<Categorie>) {
    this._allCategories = value;
  }
  public findAll() {
    this.http.get<Array<Categorie>>('http://localhost:8080/TNB-Api/Categorie/findAll').subscribe(
      value => {
        this.allCategories = value;
      }
    );

  }
}
