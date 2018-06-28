import { User } from '../../modelo/User';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, Output } from '@angular/core';
import { LoginService } from './../../servicios/login/login.service';
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
  @Output() user: User = new User();

  matcher = new MyErrorStateMatcher();
  logInForm: FormGroup;
  usersList: User[];
  userSubscription$: Subscription;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
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
    this.getUsers();
  }
  onSubmit() {
    if (this.userValid()) {
      console.log('entra');
      this.router.navigateByUrl('/main');
    } else {
      console.log('no entra');
    }
  }

  userValid() {
    const userOK = this.usersList.filter(
      (user: User) => this.user.password === user.password && this.user.user === user.user
    )[0];
    if (!isNullOrUndefined(userOK)) {
      localStorage.setItem('userId', userOK.userId + '');
      localStorage.setItem('activeSession', 'true');
      return true;
    } else {
      return false;
    }
    /*
    return !isNullOrUndefined(this.usersList.filter(
      (user: User) => this.user.password === user.password && this.user.user === user.user
    )[0]);
*/
  }

  getUsers() {
    this.userSubscription$ = this.loginService
      .getUsers()
      .subscribe((result: User[]) => {
        this.usersList = result;
      });
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
