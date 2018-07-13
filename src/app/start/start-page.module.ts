import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page/start-page.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  imports: [
    CommonModule,
    SlideshowModule
  ],
  declarations: [StartPageComponent],
  exports: [StartPageComponent]
})
export class StartPageModule { }
