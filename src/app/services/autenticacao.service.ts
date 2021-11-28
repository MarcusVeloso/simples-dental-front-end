import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Credenciais } from '../autenticacao/models/credenciais';
import { Usuario } from '../autenticacao/models/usuario';
import { LocalStorageUtils } from '../utils/localStorage';

@Injectable()
export class AutenticacaoService {

  localStorage = new LocalStorageUtils();
  private usuarioLogado = new BehaviorSubject<boolean>(this.localStorage.obterStatusUsuario());

  constructor(private router: Router) { }

  get ehUsuarioLogado() {
    return this.usuarioLogado.asObservable();
  }

  registrar(usuario: Usuario) {
    this.localStorage.registrarUsuario(usuario);
    this.usuarioLogado.next(true);
    this.navegarParaLogin();
  }

  login(credenciais: Credenciais) {
    if (this.localStorage.logar(credenciais)) {
      this.usuarioLogado.next(true);
      this.router.navigate(['/albums-list'])
    }
  }

  logout() {
    this.localStorage.logout();
    this.usuarioLogado.next(false);
    this.navegarParaLogin();
  }

  navegarParaLogin(){
    this.router.navigate(['/login'])
  }
}