import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', loadChildren: '../app/log-in/log-in.module#LogInModule' },
  { path: 'registry', loadChildren: '../app/registry/registry.module#RegistryModule' },
  { path: 'main', loadChildren: '../app/stickers/sticker.module#StickerModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
