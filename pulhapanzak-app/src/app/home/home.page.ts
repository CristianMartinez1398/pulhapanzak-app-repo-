import { Component, OnInit, inject } from '@angular/core';
import { AuthRegistroService } from '../auth-registro/services/auth-registro.service';

import { HomeService } from '../homeservice/home.service';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonNav,
  IonButton,
  IonInput,
  IonLabel,
  ToastController,
} from '@ionic/angular/standalone';
import { Registro } from '../services/auth/models/registro';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    IonLabel,
    IonButton,
    
  ],
})
export class HomePage  implements OnInit{
  
  private authService = inject(AuthRegistroService);
  private homeService = inject(HomeService);
  private toastController = inject(ToastController);
  user: Registro | null = null;
  welcome: string = '';

  async getCurrentPosition(): Promise<void> {
    await this.homeService
      .getCurrentPosition()
      .then((position) => {
        console.log('Current position:', position);
        this.showAlert(
          `Su posición ha sido obtenida con éxito (Latitud: ${position?.coords?.latitude} / Longitud: ${position?.coords?.longitude})`
        );
      })
      .catch(() => {
        this.showAlert('Ha ocurrido un error, vuelva a intentarlo', true);
      });
  }

  ngOnInit(): void {
    this.authService.getUserLogged().then((user) => {
      this.user = user;
      this.welcome = `Bienvenido(a) ${user?. nombreapellido ?? ''}`;
    });
    this.getCurrentPosition();
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
