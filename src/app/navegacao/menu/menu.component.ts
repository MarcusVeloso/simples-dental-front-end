import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { LocalStorageUtils } from 'src/app/utils/localStorage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ehUsuarioLogado$: Observable<boolean>;
  localStorage = new LocalStorageUtils()
  emaillUsuario: string = this.localStorage.obterEmaillUsuario();
  nomeUsuario: string = this.localStorage.obterNomeUsuario();

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
    this.ehUsuarioLogado$ = this.autenticacaoService.ehUsuarioLogado;
  }

  logout() {
    this.autenticacaoService.logout();
  }
}