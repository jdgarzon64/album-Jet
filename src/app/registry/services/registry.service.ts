import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class RegistryService {
  userListFirebase: AngularFireList<any>;
  countList: number;
  constructor(private firebase: AngularFireDatabase) {
    this.userListFirebase = this.firebase.list('users');
    this.firebase.list('users').valueChanges().subscribe(list => this.countList = list.length);
  }

  uploadUserToFirebase(user: User) {
    const userId = (this.countList + 1).toString();
    this.firebase.object('users/' + userId).set({ ...user, userId });

    /*  
      const userId = this.firebase.createPushId();
       console.log(userId + 'primer userId');
       user.userId = userId;
      this.userListFirebase.push({ ...user, userId });
  
  */

    /*
     const ref = this.userListFirebase.push(user).key;
     user.userId = ref;
     this.userListFirebase.update(ref, user);
     */
  }
}
