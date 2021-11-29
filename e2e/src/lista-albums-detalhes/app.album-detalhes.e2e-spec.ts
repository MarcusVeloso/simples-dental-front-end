import { AppAlbumDetalhesPage } from "./app.album-detalhes.po"

describe('Teste Detalhes do Álbum', () => {
  let page: AppAlbumDetalhesPage;

  beforeEach(() => {
    page = new AppAlbumDetalhesPage();
  })

  it('deve retornar título da página detalhes álbuns', () => {
    page.navegarParaListaAlbumDetalhes();
    page.esperar(1000);
    expect(page.retornarTituloPagina()).toEqual('Detalhes do álbum');
  })
  
  it('deve retornar o título do álbuns', () => {
    page.navegarParaListaAlbumDetalhes();
    page.esperar(2000);
    expect(page.retornarTituloAlbum()).toEqual('Quidem Molestiae Enim');
  })

  it('deve retornar o décimo item da lista de fotos', () => {
    page.navegarParaListaAlbumDetalhes();
    page.esperar(2000);
    expect(page.retornarDecimaImagemDaLista()).toBe(true);
  })
});