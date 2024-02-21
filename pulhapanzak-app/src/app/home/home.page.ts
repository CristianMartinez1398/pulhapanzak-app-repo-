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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
  ],
})
export class HomePage {
  formBuilder = inject(FormBuilder);

  loginForm: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required],
    dni: ['', [Validators.required, Validators.minLength(13), Validators.pattern('^[0-9]+$')]],
    numero: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^[0-9]+$')]]
  })
}
