import { Component, OnInit } from '@angular/core';
import {TauxtnbService} from '../../controller/service/tauxtnb.service';
import {Tauxtnb} from '../../controller/model/tauxtnb.Model';
import {Categorie} from '../../controller/model/categorie.model';
import {CategorieService} from '../../controller/service/categorie.service';

@Component({
  selector: 'app-findbystuff',
  templateUrl: './findbystuff.component.html',
  styleUrls: ['./findbystuff.component.css']
})
export class FindbystuffComponent implements OnInit {


  constructor(private _tauxtnbService : TauxtnbService,private _categorieService:CategorieService) { }

  get surface(): number {
    return this.tauxtnbService.surface;
  }

  set surface(value: number) {
    this.tauxtnbService.surface = value;
  }
  get categorieService(): CategorieService {
    return this._categorieService;
  }

  set categorieService(value: CategorieService) {
    this._categorieService = value;
  }

  get tauxtnbService(): TauxtnbService {
    return this._tauxtnbService;
  }

  set tauxtnbService(value: TauxtnbService) {
    this._tauxtnbService = value;
  }

  get date(): Date {
    return this.tauxtnbService.date;
  }

  set date(value: Date) {
    this.tauxtnbService.date = value;
  }

  ngOnInit(): void {
    this.findAll();
    this.categorieService.findAll();
  }

  get allCategories(): Array<Categorie> {
    return this.categorieService.allCategories;
  }

  set allCategories(value: Array<Categorie>) {
    this.categorieService.allCategories = value;
  }

  get allTauxTNB(): Array<Tauxtnb> {
    return this.tauxtnbService.allTauxTNB;
  }

  set allTauxTNB(value: Array<Tauxtnb>) {
    this.tauxtnbService.allTauxTNB;
  }

  get categorieID(): number {
    return this.tauxtnbService.categorieID;
  }

  set categorieID(value: number) {
    this.tauxtnbService.categorieID = value;
  }
  get listTauxTNB(): Array<Tauxtnb> {
    return this.tauxtnbService.listTauxTNB;
  }
  get categorie(): Categorie {
    return this.tauxtnbService.categorie;
  }

  set categorie(value: Categorie) {
    this.tauxtnbService.categorie= value;
  }

  set listTauxTNB(value: Array<Tauxtnb>) {
    this.tauxtnbService.listTauxTNB = value;
  }
  private findAll() {
    this.tauxtnbService.findAll();
  }

  findByCategorie() {
    this.tauxtnbService.findByCategorie(this.tauxtnbService.categorie);
  }

  findByCategorieId() {
    this.tauxtnbService.findByCategorieId(this.tauxtnbService.categorieID)
  }

  findBySurface() {
    this.tauxtnbService.findBySurface(this.surface);
  }

  findByDate() {
    this.tauxtnbService.findByDate(this.date);
  }

  findByAll() {
    this.tauxtnbService.findByEverything(this.categorieID,this.surface,this.date);
  }
}
