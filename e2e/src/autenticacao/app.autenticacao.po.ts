import { by, element } from "protractor";
import { AppBasePage } from "../app.base.po";

export class AppAutenticarPage extends AppBasePage {

  constructor() { super(); }

  navegarParaRegistrar() {
    this.navegarViaUrl('/registrar');
  }

  retornarTituloPaginaRegistrar() {
    return this.obterElementoXpath('/html/body/app-root/app-registrar/mat-card/mat-card-title').getText();
  }

  retornarTituloPaginaAposRegistrar() {
    return this.obterElementoXpath('/html/body/app-root/app-login/mat-card/mat-card-title').getText();
  }

  retornarTituloPaginaLogin() {
    return this.obterElementoXpath('/html/body/app-root/app-login/mat-card/mat-card-title').getText();
  }

  retornarTituloPaginaAposLogar() {
    return this.obterElementoXpath('/html/body/app-root/app-albums-list/div/mat-card-title').getText();
  }

  campoParametroNome = element(by.id('nome'));
  campoParametroEmail = element(by.id('email'));
  campoParametroPassword = element(by.id('password'));
  botaoRegistrar = element(by.id('registrar'));
  botaoLogar = element(by.id('botaoLogar'));
}