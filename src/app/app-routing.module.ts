import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsDetailsComponent } from './albums/albums-details/albums-details.component';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { RegistrarComponent } from './autenticacao/registrar/registrar.component';


const routes: Routes = [
  { path: '', redirectTo: 'albums-list', pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },

  { path: 'albums-list', component: AlbumsListComponent },
  { path: 'albums-details/:id', component: AlbumsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
