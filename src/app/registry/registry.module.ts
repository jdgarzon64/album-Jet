import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistryCardComponent } from './card-registry/registry-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [RegistryCardComponent],
  exports: [RegistryCardComponent]
})
export class RegistroModule { }
