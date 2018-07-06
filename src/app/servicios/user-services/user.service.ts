import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../modelo/User';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';


@Injectable()
export class UserService {
  userListFirebase: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase, private firebaseStorage: AngularFireStorage) {
    this.getUsersFromFirebase();
  }


  uploadUserToFirebase(user: User) {
    const userSaved = this.userListFirebase.push(user).key;
    user.userId = userSaved;
    this.userListFirebase.update(userSaved, user);

  }

  getUsersFromFirebase(): Observable<any> {
    this.userListFirebase = this.firebase.list('users');
    return this.firebase.list('users').valueChanges();
  }

  updateUser(user: User) {
    this.userListFirebase.update(user.userId, user);
  }
}
