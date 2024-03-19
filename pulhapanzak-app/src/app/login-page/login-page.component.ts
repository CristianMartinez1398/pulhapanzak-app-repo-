import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonRouterLink,
  IonTitle,
  IonToolbar,
  ToastController,
} from '@ionic/angular/standalone';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { IniciarSesion } from '../services/auth/models/iniciar-sesion';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/services/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
    IonItem,
    IonIcon,
    RouterLink,
    IonRouterLink,
    RouterModule,
  ],
})
export class LoingPageComponent {
  private _router = inject(Router);
  private _authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private toastController = inject(ToastController);

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required],
  });

  get LoginEmailInvalido(): boolean {
    const control_loginEmail = this.loginForm.get('email');
    return control_loginEmail ? control_loginEmail.hasError('email') : false;
  }

  get LoginPasswordInvalido(): boolean {
    const control_loginPassword = this.loginForm.get('contrasena');
    if (control_loginPassword) {
      return control_loginPassword.hasError('required');
    }
    return false;
  }

  get LoginInvalid(): boolean {
    return this.loginForm.valid;
  }

  onSubmit(): void {
    if (this.LoginInvalid) {
      const login: IniciarSesion = {
        email: this.loginForm?.get('email')?.value,
        contrasena: this.loginForm?.get('contrasena')?.value,
      };
      this._authService
        .signInWithEmailAndPassword(login)
        .then(() => {
          this._router.navigate(['/tabs/home']);
          this.showAlert('Usuario entro exitosamente');
        })
        .catch(() => {
          this.showAlert('Ha ocurrido un error al hacer login', true);
        });
    }
  }
  async showAlert(message: string, error: boolean = false): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000,
      position: 'bottom',
      color: error ? 'danger' : 'success',
    });
    await toast.present();
  }
  
}
