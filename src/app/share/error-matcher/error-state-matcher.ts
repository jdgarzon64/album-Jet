import { ErrorStateMatcher } from '@angular/material/core';
import { NgForm, FormGroupDirective, FormControl } from '@angular/forms';

export class ErrorState implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }
