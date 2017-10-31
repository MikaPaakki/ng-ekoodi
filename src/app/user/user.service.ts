import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

  private users: User[];

  constructor() {
    this.users = [
      new User('Mika', 'Paakki'),
      new User('Joku', 'Muu'),
      new User('Viela', 'Kolmas')
    ];
  }


  getUsers(): User[] {
    return this.users;
  }

  addNewUser(user: User) {
    this.users.push(user);
  }
}

