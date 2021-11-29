import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AutenticacaoService } from 'src/app/autenticacao/services/autenticacao.service';
import { Credenciais } from '../models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void { }

  logar() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {

      let credenciais: Credenciais;
      
      credenciais =
      {
        email: this.emailFormControl.value,
        password: this.passwordFormControl.value
      };

      this.autenticacaoService.login(credenciais);
    }
  }
}