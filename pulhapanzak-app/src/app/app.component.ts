import { Component, inject, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AuthRegistroService } from './auth-registro/services/auth-registro.service';
import { Registro } from './services/auth/models/registro';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit{
  

  private authService = inject(AuthRegistroService);
  user: Registro | null = null; 

  initNotifications(): void {
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      if (this.user && !this.user.deviceId) {
        this.user.deviceId = token.value;
        this.authService.updateUser(this.user);
      }
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        console.log('Push action performed: ' + JSON.stringify(notification));
      }
    );

  }
  ngOnInit(): void {
    this.authService.getUserLogged().then((user) => {
      this.user = user;
      this.initNotifications();
    });
  }



  
}
