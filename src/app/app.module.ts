import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './autenticacao/login/login.component';
import { RegistrarComponent } from './autenticacao/registrar/registrar.component';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { AlbumsDetailsComponent } from './albums/albums-details/albums-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    AlbumsListComponent,
    AlbumsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }