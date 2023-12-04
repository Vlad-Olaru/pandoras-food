import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router) { }

  isUserLoggedIn(): boolean {
    return !!this.firebaseAuth.authState.subscribe();
  }

  signInWithEmailPassword(email: string, password: string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['/admin']));
  }

}
