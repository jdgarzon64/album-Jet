import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../model/user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';



@Injectable()
export class UserService {
  userListFirebase: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) {
    this.getUsersFromFirebase();
  }

  getUsersFromFirebase(): Observable<any> {
    this.userListFirebase = this.firebase.list('users');
    return this.firebase.list('users').valueChanges();
  }

  updateUser(user: User) {
    this.userListFirebase.update(user.userId, user);
  }
}
