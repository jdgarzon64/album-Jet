import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subscription } from 'rxjs/Subscription';

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
  constructor(private router: Router) {
    this.jetImage = '../../../assets/imagenes/jet-logo.png';
    this.mainPageImage = '../../../assets/imagenes/home.png';
    this.logInImage = '../../../assets/imagenes/login.png';
    this.signUpImage = '../../../assets/imagenes/signup.png';
    this.dashboardImage = '../../../assets/imagenes/dashboard.png';
    this.logOutImage = '../../../assets/imagenes/logout.png';
  }

  ngOnInit() {
  }
  canShowNavBarResponsive(): Observable<boolean> {
    const isSessionActive = this.router.isActive('login', false) || this.router.isActive('registry', false)
      || this.router.isActive('start', false) || this.router.isActive('', true);
    return Observable.of(isSessionActive);
  }

  logOutRequest() {
    localStorage.clear();
  }
}
