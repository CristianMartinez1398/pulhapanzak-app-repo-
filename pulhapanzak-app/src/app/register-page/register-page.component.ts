import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl} from '@angular/forms';
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
  IonRouterLink,
} from '@ionic/angular/standalone';
import { Registro } from '../services/auth/models/registro'
import { RouterLink, RouterModule } from '@angular/router';
import { group } from '@angular/animations';


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
    IonText,
    IonItem,
    RouterLink, 
    IonRouterLink,
    RouterModule
  ]
})
export class RegisterPageComponent {

  

  formBuilder = inject(FormBuilder);

  

  loginForm: FormGroup = this.formBuilder.group({
    nombreapellido: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required],
    ConfirmarContrasena: ['', Validators.required],
    
  })

  get RegisterNombreApellidoInvalido(): boolean{
    const registercontrolNombreApellido = this.loginForm.get('nombreapellido');

    if (registercontrolNombreApellido) {
      return registercontrolNombreApellido.hasError('required');
      
    }
      return false;
  }

  get RegisterEmailInvalido(): boolean{
    const registercontrolEmail = this.loginForm.get('email');

    if (registercontrolEmail) {
      return registercontrolEmail.hasError('email');
      
    }
      return false;
  }
  
  confirmarContrasenaValidator(control: AbstractControl): { [key: string]: any } | null {
    const contrasena = this.loginForm.get('contrasena')?.value;
    const confirmarContrasena = control.value;
    return contrasena === confirmarContrasena ? null : { 'noCoincide': true };
  }
    
  
  
   
  

  get RegisterContrasenaInvalido(): boolean{
    const registercontrolContrasena = this.loginForm.get('contrasena');
    if (registercontrolContrasena) {
      return registercontrolContrasena.hasError('required');
    }
    return false
  }

  get RegisterConfirmarContrasenaInvalido(): boolean{
    const registercontrolConfirmarContrasena = this.loginForm.get('ConfirmarContrasena');
    if (registercontrolConfirmarContrasena) {
      return registercontrolConfirmarContrasena.hasError('required');
    }
    return false
  }

  get FormInvalid(): boolean {
    return this.loginForm.valid;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const login: Registro = {
        nombreapellido: this.loginForm?.get('nombreapellido')?.value,
        email: this.loginForm?.get('email')?.value,
        contrasena: this.loginForm?.get('contrasena')?.value,
        ConfirmarContrasena: this.loginForm?.get('ConfirmarContrasena')?.value,
        
      }
    }
  }

  

 
}
