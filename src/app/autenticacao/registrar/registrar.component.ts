import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AutenticacaoService } from 'src/app/autenticacao/services/autenticacao.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  nomeFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
  }

  registrar() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {

      let credenciais: Usuario = {
        nome: this.nomeFormControl.value,
        email: this.emailFormControl.value,
        password: this.passwordFormControl.value
      };
      
      this.autenticacaoService.registrar(credenciais);
    }
  }
}