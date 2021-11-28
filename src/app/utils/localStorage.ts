import { Md5 } from 'ts-md5/dist/md5';
import { Credenciais } from '../autenticacao/models/credenciais';
import { Usuario } from '../autenticacao/models/usuario';

export class LocalStorageUtils {

  public registrarUsuario(credenciais: Usuario) {
    this.resetar();
    localStorage.setItem('email', credenciais.email);
    localStorage.setItem('nome', credenciais.nome);
    this.gerarTokenAutenticacao(credenciais);
  }

  private resetar() {
    localStorage.removeItem('email');
    localStorage.removeItem('tokenAutenticacao');
  }

  public logout() {
    localStorage.setItem('usuarioLogado', 'false')
  }

  gerarTokenAutenticacao(credenciais: any) {

    //CRIPTOGRAFAR MD5
    let hash = Md5.hashStr(credenciais.email + credenciais.password);
    localStorage.setItem('tokenAutenticacao', hash);
  }

  public obterEmaillUsuario() {
    return localStorage.getItem('email');
  }

  public obterNomeUsuario() {
    return localStorage.getItem('nome');
  }

  public obterTokenAutenticacao() {
    return localStorage.getItem('tokenAutenticacao');
  }

  public obterStatusUsuario(): boolean {
    return localStorage.getItem('usuarioLogado') == null ? false : localStorage.getItem('usuarioLogado') == 'true';
  }

  public logar(credenciais: Credenciais): boolean {

    if (credenciais.email == this.obterEmaillUsuario() &&
      this.obterTokenAutenticacao() == Md5.hashStr(credenciais.email + credenciais.password)) {
      localStorage.setItem('usuarioLogado', 'true')
      return true;
    }

    return false;
  }
}