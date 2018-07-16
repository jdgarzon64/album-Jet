import { DashboardComponent } from './stickers/dashboard/dashboard.component';
import { RegistryCardComponent } from './registry/card-registry/registry-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardLoginComponent } from './log-in/card-log-in/card-login.component';
import { HomePageComponent } from './home/home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: CardLoginComponent },
  { path: 'registry', component: RegistryCardComponent },
  { path: 'main', component: DashboardComponent }
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
