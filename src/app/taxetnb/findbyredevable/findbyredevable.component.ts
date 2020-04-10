import { Component, OnInit } from '@angular/core';
import {TaxetnbService} from '../../controller/service/taxetnb.service';
import {Taxetnb} from '../../controller/model/taxetnb.Model';

@Component({
  selector: 'app-findbyredevable',
  templateUrl: './findbyredevable.component.html',
  styleUrls: ['./findbyredevable.component.css']
})
export class FindbyredevableComponent implements OnInit {

  constructor(private _tnbser: TaxetnbService) { }

  get tnbser(): TaxetnbService {
    return this._tnbser;
  }

  set tnbser(value: TaxetnbService) {
    this._tnbser = value;
  }
  get taxelist() : Array<Taxetnb> {
    return this.tnbser.TaxeTNBList;  }

  set taxelist(value: Array<Taxetnb>) {
    this.tnbser.TaxeTNBList = value;
  }
  get identifiant(): string {
    return this.tnbser.identifiant;
  }

  set identifiant(value) {
    this.tnbser.identifiant = value;
  }

  ngOnInit(): void {
  }

  findByRedevableIdent() {
    this.tnbser.findByRedevableIdentifiant(this.tnbser.identifiant);
  }
}
