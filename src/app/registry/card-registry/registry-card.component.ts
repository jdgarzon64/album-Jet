import { User } from '../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { RegistryService } from '../services/registry.service';
import { ErrorState } from '../../share/error-matcher/error-state-matcher';


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

  constructor(private fb: FormBuilder, private registryService: RegistryService, private router: Router) {
    this.buildForm();
    this.selectImageMessage = 'Click here and select image from computer';
    this.hasImage = false;
  }

  ngOnInit() {
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
    this.sendToUploadUser(this.user);
    this.router.navigateByUrl('/login');
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

  sendToUploadUser(user: User) {
    if (this.hasImage) {
      this.user.profilePicture = this.selectedFile.name;
      this.registryService.uploadUserToFirebase(user);
      this.hasImage = false;
    }
  }
}
