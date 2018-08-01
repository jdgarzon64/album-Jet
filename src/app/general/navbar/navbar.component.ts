import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/observable/of';
import { LogInService } from '../../log-in/services/log-in.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  jetImage: string;
  mainPageImage: string;
  logInImage: string;
  signUpImage: string;
  dashboardImage: string;
  logOutImage: string;
  constructor(private router: Router, private authService: LogInService) {
    this.jetImage = '../../../assets/images/jet-logo.png';
    this.mainPageImage = '../../../assets/images/home.png';
    this.logInImage = '../../../assets/images/login.png';
    this.signUpImage = '../../../assets/images/signup.png';
    this.dashboardImage = '../../../assets/images/dashboard.png';
    this.logOutImage = '../../../assets/images/logout.png';
  }

  ngOnInit() {
  }
  canShowNavBar() {
    const isSessionActive = this.router.isActive('login', false) || this.router.isActive('registry', false)
      || this.router.isActive('home', false) || this.router.isActive('', true);
    return isSessionActive;
  }

  logOutRequest() {
    localStorage.clear();
    this.authService.logOut();
  }
}
