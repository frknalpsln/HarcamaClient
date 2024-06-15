import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../../../models/user.model';

@Pipe({
  name: 'users'
})
export class UsersPipe implements PipeTransform {

  transform(value: UserModel[], search: string): UserModel[] {
    if(!search){
      return value;
    }

    return value.filter(p=>
      p.adi.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.soyadi.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.userName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      p.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }

}
