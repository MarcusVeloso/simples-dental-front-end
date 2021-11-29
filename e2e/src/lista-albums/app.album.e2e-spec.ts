import { AppAlbumsPage } from "./app.album.po"

describe('Teste Lista de Álbuns', () => {
  let page: AppAlbumsPage;

  beforeEach(() => {
    page = new AppAlbumsPage();
  })

  it('deve estar na página lista de álbuns', () => {
    page.navegarParaListaAlbum();
    page.esperar(1000);
    expect(page.retornarTituloPagina()).toEqual('Lista de álbuns');
  })
  
  it('deve retornar primeiro item da lista de álbuns', () => {
    page.navegarParaListaAlbum();
    page.esperar(2000);
    expect(page.retornarTituloPrimeiroItemLista()).toEqual('Quidem Molestiae Enim');
  })

  it('deve existir uma imagem no item da lista', () => {
    page.navegarParaListaAlbum();
    page.esperar(2000);
    expect(page.retornarImagemNaLista()).toBe(true);
  })
});