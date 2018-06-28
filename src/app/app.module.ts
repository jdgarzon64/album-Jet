import { environment } from './../environments/environment';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './general/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegistroModule } from './registro/registry.module';
import { RegistryService } from './servicios/registry.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './servicios/login/login.service';
import { PaginationService } from './servicios/paginator/pagination.service';
import { FiguraModule } from './figuras/sticker.module';
import { UserService } from './servicios/user-services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    LoginModule,
    FiguraModule,
    BrowserAnimationsModule,
    RegistroModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RegistryService, LoginService, PaginationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
