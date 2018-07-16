import { StartPageModule } from './start/start-page.module';
import { environment } from '../environments/environment';
import { LoginModule } from './log-in/log-in.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './general/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroModule } from './registry/registry.module';
import { RegistryService } from './services/registry/registry.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/log-in/log-in.service';
import { PaginationService } from './services/paginator/pagination.service';
import { StickerModule } from './stickers/sticker.module';
import { UserService } from './services/user-services/user.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    StartPageModule,
    MatToolbarModule,
    LoginModule,
    StickerModule,
    BrowserAnimationsModule,
    RegistroModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [RegistryService, LoginService, PaginationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
