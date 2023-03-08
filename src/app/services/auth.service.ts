import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, User } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogger=false;
  user !: User | null;
  constructor(private auth:Auth) { }
  async loginWithGoogle(){
    let provider=new GoogleAuthProvider();
    return await signInWithPopup(this.auth,provider);
  }
  logOut(){
    this.auth.signOut();
  }
}
