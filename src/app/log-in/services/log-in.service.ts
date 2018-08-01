import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  login(email: string, password: string): any {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  logOut() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  signUp(email: string, password: string): any {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }
}
