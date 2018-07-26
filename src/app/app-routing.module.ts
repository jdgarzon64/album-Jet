import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'main', loadChildren: '../app/stickers/sticker.module#StickerModule' },
  { path: 'login', loadChildren: '../app/log-in/log-in.module.ts#LoginModule' },
  { path: 'registry', loadChildren: '../app/registry/registry.module.ts#RegistryModule' }
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
