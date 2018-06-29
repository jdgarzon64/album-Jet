import { UserService } from './../../servicios/user-services/user.service';
import { User } from '../../modelo/User';
import { NgForm, FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-registry-card',
  templateUrl: './registry-card.component.html',
  styleUrls: ['./registry-card.component.css']
})
export class RegistryCardComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  user: User = new User();
  registryForm: FormGroup;
  pathProfilePicture: string;
  selectImageMessage: string;
  hasImage: boolean;
  selectedFile: File;

  constructor(private fb: FormBuilder, private userService: UserService, private db: AngularFireDatabase) {
    this.buildForm();
    this.selectImageMessage = 'Click here and select imagen from computer';
    this.pathProfilePicture = '';
    this.hasImage = false;
  }

  ngOnInit() {
    this.userService.getUsersFromFirebase();
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
    // console.log(this.registryForm);
    this.sendToUploadUser(this.user);
  }

  findImage(event: any) {
    console.log(event);
    if (event.target.files[0]) {
      this.selectedFile = event.target.files[0];
      this.hasImage = true;
      // console.log('tipo: ' + this.selectedFile.type);
      const metaData = { 'contentType': this.selectedFile.type };
      const storageRef: firebase.storage.Reference = firebase.storage().ref('profilePictures/' + this.selectedFile.name);
      storageRef.put(this.selectedFile, metaData);
    }
  }

  sendToUploadUser(user: User) {
    // console.log('hasImage' + this.hasImage);
    if (this.hasImage) {
      this.user.profilePicture = this.selectedFile.name;
      this.userService.uploadUserToFirebase(user);
      console.log('envie al user');
    }
  }

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
