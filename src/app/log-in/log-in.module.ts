import { CardLoginComponent } from './card-log-in/card-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackBarMessageComponent } from '../general/snack-bar-message/snack-bar-message.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'login', component: CardLoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardLoginComponent],
  exports: [CardLoginComponent],
  entryComponents: [SnackBarMessageComponent]
})
export class LoginModule { }
