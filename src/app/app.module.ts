import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { MenuComponent } from './navegacao/menu/menu.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { RegistrarComponent } from './autenticacao/registrar/registrar.component';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { AlbumsDetailsComponent } from './albums/albums-details/albums-details.component';

import { AlbumService } from './albums/services/album.service';
import { AutenticacaoService } from './services/autenticacao.service';
import { AutenticacaoGuard } from './services/autenticacao.guard';

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,

    LoginComponent,
    RegistrarComponent,

    AlbumsListComponent,
    AlbumsDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,

  ],
  providers: [
    AlbumService,
    AutenticacaoService,
    AutenticacaoGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }