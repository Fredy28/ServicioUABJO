import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service'; // Asegúrate de importar tu servicio de autenticación

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Asegúrate de tener el nombre correcto para el archivo de estilo
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    // Inicialización del formulario reactivo
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log('Formulario enviado', this.loginForm.valid);
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((res: any) => {
        console.log(res);
  
        if (res.message === 'Autenticación exitosa') {
          localStorage.setItem('token', res.access_token); 
          localStorage.setItem('user', JSON.stringify(res.user));
          this.authService.login('usuario_token');
          console.log('Login exitoso');
          console.log('Redirigiendo a /opciones');
          this.router.navigate(['/opciones']);
          //localStorage.removeItem('user'); 
          //console.log('Usuario eliminado', res.message);
        } else {
          console.log('Login fallido:', res.message);
        }
      }, error => {
        console.log('Error en el login:', error);
        alert('Error: contraseña o usuario inválidos');
      });
    } else {
      console.log('Formulario inválido');
    }
  }

    /*login() {
      console.log('Formulario enviado', this.loginForm.valid);
      if (this.loginForm.valid) {
        this.authService.login('user');
    
        console.log('Login exitoso');
        this.router.navigate(['/opciones']);
      } else {
        console.log('Formulario inválido');
      }
    }*/
    
  
}
