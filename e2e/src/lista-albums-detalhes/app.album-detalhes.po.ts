import { AppBasePage } from "../app.base.po";

export class AppAlbumDetalhesPage extends AppBasePage {

  constructor() { super(); }

  navegarParaListaAlbumDetalhes() {
    this.navegarViaUrl('/albums-details/1');
  }

  retornarTituloPagina() {
    return this.obterElementoXpath('/html/body/app-root/app-albums-details/div/mat-card-title').getText();
  }

  retornarTituloAlbum() {
    return this.obterElementoXpath('/html/body/app-root/app-albums-details/div/mat-card-subtitle').getText();
  }                                 

  retornarDecimaImagemDaLista() {
    return this.obterElementoXpath('/html/body/app-root/app-albums-details/div/div/div[10]/mat-card/img').isPresent();
  }
}