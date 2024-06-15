import { Component } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { SirketModel } from '../../../models/sirket.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sirket',
  templateUrl: './sirket.component.html',
  styleUrl: './sirket.component.scss'
})
export class SirketComponent {

createModel : SirketModel = new SirketModel();
  constructor( private http : HttpService){}

  add(form : NgForm){
    this.http.post<string>("Sirket/Create", this.createModel,
      (res) => {
      res.data
      }
    );
  }
}
