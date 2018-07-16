import { User } from '../../model/user';
import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../../services/user-services/user.service';
import { NgForm, FormGroup, FormGroupDirective } from '@angular/forms';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subscription } from 'rxjs/Subscription';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {
  user: User = new User();
  matcher = new MyErrorStateMatcher();
  logInForm: FormGroup;
  usersList: User[];
  userSubscription$: Subscription;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.buildForm();
  }
  buildForm() {
    this.logInForm = this.fb.group({
      user: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }
  ngOnInit(): void {
    this.userService.getUsersFromFirebase().subscribe((list: User[]) => {
      this.usersList = list;
    });
  }
  onSubmit() {
    if (this.isUserValid(this.user)) {
      this.router.navigate(['/main']);
    } else {
      console.log('no entra');
    }
  }

  isUserValid(localUser: User) {
    const userOK: User = this.usersList.filter(
      (user: User) => user.password === localUser.password && user.user === localUser.user)[0];
    if (!isNullOrUndefined(userOK)) {
      localStorage.setItem('activeSession', 'true');
      localStorage.setItem('userId', userOK.userId + '');
      localStorage.setItem('userName', userOK.name);
      localStorage.setItem('user', userOK.user);
      localStorage.setItem('profilePicture', userOK.profilePicture);
      return userOK;
    } else {
      return null;
    }
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
