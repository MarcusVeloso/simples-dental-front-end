import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AutenticacaoService } from './autenticacao.service';

@Injectable()
export class AutenticacaoGuard implements CanActivate {

  constructor(private autenticacaoService: AutenticacaoService,
    private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.autenticacaoService.ehUsuarioLogado
      .pipe(
        take(1),
        map((ehUsuarioLogado: boolean) => {
          if (!ehUsuarioLogado) {
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        })
      );
  }
}