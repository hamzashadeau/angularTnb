import { Component, OnInit } from '@angular/core';
import {TaxetnbService} from '../controller/service/taxetnb.service';
import {Taxetnb} from '../controller/model/taxetnb.Model';

@Component({
  selector: 'app-taxetnb',
  templateUrl: './taxetnb.component.html',
  styleUrls: ['./taxetnb.component.css']
})
export class TaxetnbComponent implements OnInit {

  constructor(private _taxetnbser:TaxetnbService) { }

  get taxetnbser(): TaxetnbService {
    return this._taxetnbser;

  }

  set taxetnbser(value: TaxetnbService) {
    this._taxetnbser = value;
  }

  get taxelist() : Array<Taxetnb> {
    return this.taxetnbser.TaxeTNBList;  }

  set taxelist(value: Array<Taxetnb>) {
    this.taxetnbser.TaxeTNBList = value;
  }
  ngOnInit(): void {
    this.findAll();
  }

  private findAll() {
    this.taxetnbser.findAll();
  }
}
