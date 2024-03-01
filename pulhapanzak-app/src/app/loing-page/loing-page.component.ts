import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonInput, IonRouterLink, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-loing-page',
  templateUrl: './loing-page.component.html',
  styleUrls: ['./loing-page.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
    RouterLink, 
    IonRouterLink,
    RouterModule
  ]
})
export class LoingPageComponent {

  constructor() { }

  

}
