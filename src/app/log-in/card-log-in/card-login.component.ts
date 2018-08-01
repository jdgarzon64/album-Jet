import { LogInService } from './../services/log-in.service';
import { User } from '../../model/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../share/services/user-services/user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { SnackBarMessageComponent } from '../../general/snack-bar-message/snack-bar-message.component';
import { Router } from '@angular/router';
import { ErrorState } from '../../share/error-matcher/error-state-matcher';


@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {
  user: User = new User();
  matcher = new ErrorState();
  logInForm: FormGroup;
  usersList: User[];
  ERROR_LOG_IN = 'this account doesn\'t exist!';

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router, private snackBar: MatSnackBar,
    public authService: LogInService) {
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
      const userOk = this.authService.login(this.user.user, this.user.password);
      userOk.then(value => {
        this.router.navigate(['/main']);
      })
        .catch(() => {
          this.openSnackBar(this.ERROR_LOG_IN);
        });
    }
  }

  isUserValid(localUser: User) {
    const userOK: User = this.usersList.filter(
      (user: User) => user.password === localUser.password && user.user === localUser.user)[0];
    if (userOK) {
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

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackBarMessageComponent, {
      duration: 1500,
      data: {
        message: message
      },
      panelClass: 'messageBox'
    });
  }
}
