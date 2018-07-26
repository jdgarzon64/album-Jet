import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistryCardComponent } from './card-registry/registry-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackBarMessageComponent } from '../general/snack-bar-message/snack-bar-message.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'registry', component: RegistryCardComponent }];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistryCardComponent, SnackBarMessageComponent],
  exports: [RegistryCardComponent],
  entryComponents: [SnackBarMessageComponent]
})
export class RegistryModule { }
