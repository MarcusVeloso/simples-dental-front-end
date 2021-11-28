import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localStorage';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  localStorageUtils = new LocalStorageUtils();
  nomeFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registrar() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {

      let credenciais: Usuario = {
        nome: this.nomeFormControl.value,
        email: this.emailFormControl.value,
        password: this.passwordFormControl.value
      };

      this.localStorageUtils.registrarUsuario(credenciais);
      this.router.navigate(['/albums-list']);
    }
  }
}