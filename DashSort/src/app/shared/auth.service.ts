import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  username: string = '';

  // Logging In
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/dashboard']);
        // console.log(typeof(res.user))
        // console.log(res.user);
        debugger;

        this.username = res.user?.email!;
      },
      (err) => {
        if (
          err.message === 'Firebase: Error (auth/invalid-login-credentials).'
        ) {
          alert('Invalid login credentials!!!');
        }
        this.router.navigate(['/login']);
        console.log(err.message);
      }
    );
  }

  // registration of user
  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('Registration is successful!!');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  getUser() {
    return this.username;
  }

  // Logging out
  logout() {
    this.fireAuth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  // forgot password
  forgotPassword(email: string) {
    this.fireAuth.sendPasswordResetEmail(email).then(
      () => {
        alert('Check you mail for password reset link');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
