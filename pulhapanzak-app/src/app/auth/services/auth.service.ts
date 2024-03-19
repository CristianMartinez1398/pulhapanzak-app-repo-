import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailLink, createUserWithEmailAndPassword, user } from '@angular/fire/auth';
import { IniciarSesion } from 'src/app/services/auth/models/iniciar-sesion';
import { Firestore } from '@angular/fire/firestore';
import { collection, doc, setDoc } from 'firebase/firestore';
import { User, signInWithEmailAndPassword, } from 'firebase/auth';
import { Registro } from 'src/app/services/auth/models/registro'

const Path = 'users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth = inject(Auth)
  private _firestore = inject(Firestore)
  private _collection = collection(this._firestore, Path)

  

  async isUsertLoggedIn() {
    const user = await this.getCurrentUser();
    return !!user;
    
  }

  private getCurrentUser(): Promise<User | null>{
    return new Promise<User | null>((resolve) =>{
      this._auth.onAuthStateChanged((user) => {
        resolve(user)
      }) 
    }) 
  }

  async signInWithEmailAndPassword(login: IniciarSesion){
    const isAuthenticated = await this.isUsertLoggedIn();
    if (isAuthenticated) return Promise.reject('User already login')
    
    return signInWithEmailAndPassword(this._auth, login.email, login.contrasena)
  }

  signout(){
    if (!this.isUsertLoggedIn()) {
      return Promise.reject('user not found')
    }
    return this._auth.signOut()
  }
  
}


