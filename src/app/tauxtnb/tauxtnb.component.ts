import { Component, OnInit } from '@angular/core';
import {TauxtnbService} from '../controller/service/tauxtnb.service';
import {Tauxtnb} from '../controller/model/tauxtnb.Model';

@Component({
  selector: 'app-tauxtnb',
  templateUrl: './tauxtnb.component.html',
  styleUrls: ['./tauxtnb.component.css']
})
export class TauxtnbComponent implements OnInit {

  constructor(private _tauxtnbService : TauxtnbService) { }


  get tauxtnbService(): TauxtnbService {
    return this._tauxtnbService;
  }

  set tauxtnbService(value: TauxtnbService) {
    this._tauxtnbService = value;
  }

  ngOnInit(): void {
    this.findAll();
  }
  get allTauxTNB(): Array<Tauxtnb> {
    return this.tauxtnbService.allTauxTNB;
  }

  set allTauxTNB(value: Array<Tauxtnb>) {
    this.tauxtnbService.allTauxTNB;
  }

  private findAll() {
    this.tauxtnbService.findAll();
  }
}
