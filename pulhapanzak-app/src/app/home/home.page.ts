import { Component } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonNav, IonButton, IonIcon, IonInput, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonInput, IonLabel],
})
export class HomePage {
  constructor() {}
}
