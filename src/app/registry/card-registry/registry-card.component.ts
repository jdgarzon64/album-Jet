import { User } from '../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { RegistryService } from '../services/registry.service';
import { ErrorState } from '../../share/error-matcher/error-state-matcher';
import { UserService } from '../../share/services/user-services/user.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { SnackBarMessageComponent } from '../../general/snack-bar-message/snack-bar-message.component';


@Component({
  selector: 'app-registry-card',
  templateUrl: './registry-card.component.html',
  styleUrls: ['./registry-card.component.css']
})
export class RegistryCardComponent implements OnInit {
  matcher = new ErrorState();
  user: User = new User();
  registryForm: FormGroup;
  pathProfilePicture;
  selectImageMessage: string;
  hasImage: boolean;
  selectedFile: File;
  usersList: User[];
  USER_ALREADY_REGISTERED = 'user already registered';
  USER_REGISTERED = 'user registered';
  IMAGE_NO_LOADED = 'please load image from disk';

  constructor(private fb: FormBuilder, private registryService: RegistryService,
    private router: Router, private userService: UserService, private snackBar: MatSnackBar) {
    this.buildForm();
    this.selectImageMessage = 'Click here and select image from computer';
    this.hasImage = false;

  }

  ngOnInit() {
    this.userService.getUsersFromFirebase().subscribe((list: User[]) => {
      this.usersList = list;
    });
  }

  buildForm() {
    this.registryForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      user: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }
  onSubmit() {
    if (this.sendToUploadUser(this.user)) {
      this.openSnackBar(this.USER_REGISTERED);
      this.router.navigateByUrl('/login');
    } else if (!this.hasImage) {
      this.openSnackBar(this.IMAGE_NO_LOADED);
    } else {
      console.log('user already registered');
      this.openSnackBar(this.USER_ALREADY_REGISTERED);
    }

  }

  findImage(event: any) {
    if (event.target.files[0]) {
      this.selectedFile = event.target.files[0];
      this.hasImage = true;
      const metaData = { 'contentType': this.selectedFile.type };
      const storageRef: firebase.storage.Reference = firebase.storage().ref('profilePictures/' + this.selectedFile.name);
      storageRef.put(this.selectedFile, metaData);
      setTimeout(() => { this.pathProfilePicture = storageRef.getDownloadURL(); }, 3000);
    }
  }

  sendToUploadUser(localUser: User) {
    const userOK: User = this.usersList.filter(
      (user: User) => user.user === localUser.user)[0];
    if (this.hasImage && (!userOK)) {
      this.user.profilePicture = this.selectedFile.name;
      this.registryService.uploadUserToFirebase(localUser);
      this.hasImage = false;
      return true;
    } else {
      return false;
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
