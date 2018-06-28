import { User } from '../../modelo/User';
import { NgForm, FormGroup, FormGroupDirective } from '@angular/forms';
import { RegistryService } from '../../servicios/registry.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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

  constructor(private fb: FormBuilder, private registroService: RegistryService) {
    this.buildForm();
    this.selectImageMessage = 'Click here and select imagen from computer';
    this.pathProfilePicture = '';
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
    console.log(this.registryForm);
  }

  findImage(event: any) {
    console.log(event);
    if (event.target.files[0]) {
      this.selectedFile = event.target.files[0];
    }
  }
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
