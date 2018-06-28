import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../modelo/User';
import { UserService } from '../../servicios/user-services/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  auxProfilePicture: string;
  userId: number;
  currentUser: User;
  userSubscription$: Subscription;
  usersList: User[];
  constructor(private userService: UserService) {
    // this.auxProfilePicture = '../../../assets/imagenes/lobo.jpg';
    this.userId = Number(localStorage.getItem('userId'));
  }

  ngOnInit() {
    console.log('llamar user by id');
    this.getUserById();
    console.log('llamar all users');
    console.log(this.usersList);
  }

  getUserById() {
    this.userSubscription$ = this.userService.getUserById(this.userId).subscribe((result: User) => {
      this.currentUser = result;
    });
  }

  getUsers() {
    this.userSubscription$ = this.userService
      .getUsers()
      .subscribe((result: User[]) => {
        this.usersList = result;
      });
  }
}
