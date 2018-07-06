import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../modelo/User';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  auxProfilePicture: string;
  userId: string;
  currentUser: User = new User();
  userSubscription$: Subscription;
  usersList: User[];
  constructor() {
    // this.auxProfilePicture = '../../../assets/imagenes/lobo.jpg';
  
  }

  ngOnInit() {
    // this.userService.getUsersFromFirebase();
    // this.userId = localStorage.getItem('userId');
   // this.getUserByIds();
    // this.currentUser = this.userService.getUserById(this.userId);
    // this.currentUser.profilePicture = '../../../assets/imagenes/elefante.jpg';
    //  console.log('current user dash', this.currentUser.name);
  }

  // getUserByIds() {
  //   this.userService.getUserById(this.userId).subscribe((result: User) => {
  //     console.log('iiiiiiiiiiiiiiiiiii',result);
  //     this.currentUser = result;
  //   });
  // }

  /*
   getUsers() {
     this.userSubscription$ = this.userService
       .getUsersFromFirebase()
       .subscribe((result: User[]) => {
         this.usersList = result;
       });
   }
   */
}
