import { AppAutenticarPage } from "./app.autenticacao.po"

describe('Teste de autenticação', () => {
  let page: AppAutenticarPage;

  beforeEach(() => {
    page = new AppAutenticarPage();
  });

  it('deve estar na página registrar', () => {
    page.navegarParaRegistrar();
    expect(page.retornarTituloPaginaRegistrar()).toEqual('Registrar Usuário');
  })

  it('deve registrar usuário', ()=>{
    page.navegarParaRegistrar();
    page.campoParametroNome.sendKeys('Marcus Veloso');
    page.campoParametroEmail.sendKeys('marcus@veloso.com');
    page.campoParametroPassword.sendKeys('abc@987654321');
    page.botaoRegistrar.click();

    page.esperar(1000);

    expect(page.retornarTituloPaginaAposRegistrar()).toEqual('Login');
  })

  it('deve estar na página Login', () => {
    page.navegarParaLogin();
    expect(page.retornarTituloPaginaLogin()).toEqual('Login');
  })

  it('deve realizar login', () => {
    page.navegarParaLogin();
    page.campoParametroEmail.sendKeys('marcus@veloso.com');
    page.campoParametroPassword.sendKeys('abc@987654321');
    page.botaoLogar.click();

    page.esperar(1000);

    expect(page.retornarTituloPaginaAposLogar()).toEqual('Lista de álbuns');
  })
});