import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickerComponent } from './sticker/sticker.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { CollectedPopUpComponent } from './collected-pop-up/collected-pop-up.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PictureComponent } from './profile/picture/picture.component';
import { InformationComponent } from './profile/information/information.component';
import { Routes, RouterModule } from '@angular/router';

 const routes: Routes = [{ path: 'main', component: DashboardComponent }];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent, StickerComponent, CollectedPopUpComponent, PictureComponent, InformationComponent],
  exports: [DashboardComponent],
  entryComponents: [CollectedPopUpComponent]
})
export class StickerModule { }
