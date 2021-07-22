import {Subject} from 'rxjs';
import {UserModel} from '../models/user.model';

export class UserService{
  private users:UserModel[]=[
    {firstName:'Zeinabou',
    lastName:'Issaka',
    email:'zeinabou@gmail.com',
    drinkPreference: 'fanta',
    hobbies:[
      'lire, ','chatter, ', 'manger']
    }
  ];
  userSubject = new Subject<UserModel[]>();

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user:UserModel){
    this.users.push(user);
    this.emitUsers();
  }
}
