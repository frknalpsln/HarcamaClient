import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { HttpService } from '../../../services/http.service';
import { RoleModel } from '../../../models/role.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users: UserModel[] = [];  
  roles: RoleModel[] = [];

  @ViewChild("addModalCloseBtn") addModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;

  createModel: UserModel = new UserModel();

  search: string = "";

  constructor(
    private http: HttpService,
  ){}

  ngOnInit(): void {
    this.getAllRoles();
  }

 

  getAllRoles(){
    this.http.post<RoleModel[]>("User/GetAllRoles",{}, res=> {
      this.roles = res.data;
    });
  }
  
  add(form: NgForm){
    if(form.valid){
      this.http.post<string>("Auth/Register",this.createModel,(res)=> {
       res.data;
        this.addModalCloseBtn?.nativeElement.click();
        this.createModel = new UserModel();
      });
    }
  }

}