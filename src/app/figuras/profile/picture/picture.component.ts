import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  pathProfilePicture;
  picture: string;
  constructor() {
    this.picture = localStorage.getItem('profilePicture');
  }

  ngOnInit() {
    const storageRef: firebase.storage.Reference = firebase.storage().ref('profilePictures/' + this.picture);
    this.pathProfilePicture = storageRef.getDownloadURL();
  }

}
