import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RegisterModel } from '../../../models/register.model';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { Router } from '@angular/router';
import { SirketModel } from '../../../models/sirket.model';
import { HarcamaBirimleriModel } from '../../../models/harcama.birimleri.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
register : RegisterModel  = new RegisterModel();
sirketler : SirketModel[] = [];
birimler : HarcamaBirimleriModel[] = [];
selectedSirketId : string = "";
selectedBirimId : string = "";

constructor(
  private http : HttpService,
  private router : Router
){}
  ngOnInit(): void {
    this.sirketleriGetir();
    this.birimleriGetir();
  }

signIn(form:NgForm){
  if(form.valid){
    this.http.post<RegisterModel>("Auth/Register",this.register,(res)=> {
      localStorage.setItem("token", res.data!.token);
      this.router.navigateByUrl("/");
    })
  }
}


sirketleriGetir(){
  
  this.http.post<SirketModel[]>("Sirket/GetAll", {sirketId :  this.selectedSirketId} , 
    (res) =>{
      this.sirketler = res.data;
    }

  );
}

birimleriGetir(){
  
  this.http.post<HarcamaBirimleriModel[]>("HarcamaBirimleri/GetAll", {birimId : this.selectedBirimId} , 
    (res) =>{
      this.birimler = res.data;
    }

  )};
}