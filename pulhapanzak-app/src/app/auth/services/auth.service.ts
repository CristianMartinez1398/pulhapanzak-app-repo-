import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailLink } from '@angular/fire/auth';
import { IniciarSesion } from 'src/app/services/auth/models/iniciar-sesion';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Path = 'users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth = inject(Auth)
  private _firestore = inject(Firestore)
  private _collection = collection(this._firestore, Path)

  private isUsertLoggedIn(){
    return !!this.getCurrentUser();
  }

  private getCurrentUser(){
    return this._auth.currentUser;
  }

  signInWithEmailAndPassword(login: IniciarSesion){
    if (this.isUsertLoggedIn()) {
      return Promise.reject('User already login')
    }
    return signInWithEmailAndPassword(this._auth, login.email, login.contrasena)
  }

  singOut(){
    if (!this.isUsertLoggedIn()) {
      return Promise.reject('User not found')
    }
    return this._auth.signOut();
  }
}
