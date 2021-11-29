import { AppBasePage } from "../app.base.po";

export class AppAlbumsPage extends AppBasePage {

  constructor() { super(); }

  navegarParaListaAlbum() {
    this.navegarViaUrl('/albums-list');
  }

  retornarTituloPagina() {
    return this.obterElementoXpath('/html/body/app-root/app-albums-list/div/mat-card-title').getText();
  }

  retornarTituloPrimeiroItemLista() {
    return this.obterElementoXpath('/html/body/app-root/app-albums-list/div/mat-card[1]/mat-card-title-group/div/mat-card-title').getText();
  }

  retornarImagemNaLista() {
    return this.obterElementoXpath('/html/body/app-root/app-albums-list/div/mat-card[1]/mat-card-title-group/img').isPresent();
  }
}