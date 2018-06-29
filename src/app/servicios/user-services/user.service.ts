import { Injectable } from '@angular/core';
import { USERS } from '../../../environments/mocks/mock-users';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { User } from '../../modelo/User';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class UserService {
  usersList: User[];
  userListFirebase: AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) {
    this.getUsers().subscribe((result: User[]) => {
      this.usersList = result;
    });
    console.log('go user-list' + this.usersList);
  }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUserById(id: number): Observable<User> {
    const currentUser = this.usersList.filter((user: User) => user.userId === id)[0];
    console.log('go user-service' + currentUser);
    return of(currentUser);
  }

  uploadUserToFirebase(user: User) {
    this.userListFirebase.push({
      name: user.name,
      lastName: user.lastName,
      profilePicture: user.profilePicture,
      user: user.user,
      password: user.password
    });
  }
  getUsersFromFirebase() {
    return this.userListFirebase = this.firebase.list('users');
  }
}
