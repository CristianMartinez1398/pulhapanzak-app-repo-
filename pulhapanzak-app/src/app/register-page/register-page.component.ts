import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonNav,
  IonButton,
  IonInput,
  IonLabel,
  IonItem,
  IonText,
} from '@ionic/angular/standalone';
import { Login } from '../services/auth/models/login'
import { IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    IonLabel,
    IonButton,
    IonText
  ],
})
export class RegisterPageComponent {

  

  formBuilder = inject(FormBuilder);

  loginForm: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required],
    dni: ['', [Validators.required, Validators.minLength(13), Validators.pattern('^[0-9]+$')]],
    numero: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^[0-9]+$')]]
  })

  get EmailInvalido(): boolean{
    const controlEmail = this.loginForm.get('email');

    if (controlEmail) {
      return controlEmail.hasError('email');
      
    }
      return false;
  }

  get IdentidadInvalido(): boolean{
    const controlDNI = this.loginForm.get('dni');
    if (controlDNI) {
      return controlDNI.hasError('minlength');
    }
    return false
  }

  get NumeroInvalido(): boolean{
    const controlNumero = this.loginForm.get('numero');
    if (controlNumero) {
      return controlNumero.hasError('minlength');
    }
    return false
  }

  get FormInvalid(): boolean {
    return this.loginForm.valid;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const login: Login = {
        nombre: this.loginForm?.get('nombre')?.value,
        apellidos: this.loginForm?.get('apellidos')?.value,
        email: this.loginForm?.get('email')?.value,
        contrasena: this.loginForm?.get('contrasena')?.value,
        dni: this.loginForm?.get('dni')?.value,
        numero: this.loginForm?.get('numero')?.value
      }
    }
  }

  constructor() { }

 
}
