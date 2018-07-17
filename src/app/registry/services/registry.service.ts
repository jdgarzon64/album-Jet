import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class RegistryService {
  userListFirebase: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) {
    this.userListFirebase = this.firebase.list('users');
  }

  uploadUserToFirebase(user: User) {
    const userId = this.firebase.createPushId();
    this.userListFirebase.push({ ...user, userId });
  }
}
