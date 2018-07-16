import { DashboardComponent } from './stickers/dashboard/dashboard.component';
import { RegistryComponent } from './registry/registry/registry.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './log-in/log-in/log-in.component';
import { StartPageComponent } from './start/start-page/start-page.component';


const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'start', component: StartPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registry', component: RegistryComponent },
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
