import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {throwError,Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  user = new Subject<User>();


  constructor(private http:HttpClient) { }

  signUp(userEmail:string,userPassword:string){
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAZtQl7JHDCkIVi0_NDtgJQgVaWN3WhRQM',{
        email:userEmail,
        password:userPassword,
        returnSecureToken : true
      }
    )
    .pipe(
      catchError(this.handleError),
      tap((resData)=>{
        const expirationDate = new Date(
          new Date().getTime() + +resData.expiresIn * 1000
        );
        const userInfo = new User(
          resData.email,
          resData.localId,
          resData.idToken,
          expirationDate
        );
        this.user.next(userInfo);

      })
    )
    
  }

  login(userEmail:string,userPassword:string){
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAZtQl7JHDCkIVi0_NDtgJQgVaWN3WhRQM',{
        email:userEmail,
        password:userPassword,
        returnSecureToken : true
      }
    )
    .pipe(
      catchError(this.handleError),
      tap((resData)=>{
        const expirationDate = new Date(
          new Date().getTime() + +resData.expiresIn * 1000
        );
        const userInfo = new User(
          resData.email,
          resData.localId,
          resData.idToken,
          expirationDate
        );
        this.user.next(userInfo);

      })
    )
    
  }

  addUserData(userData:object){
    return this.http.post('https://extreme-login-default-rtdb.firebaseio.com/users.json',userData);
  }


  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!!';

    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }

    switch (errorResponse.error.error.message) {
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'Invalid login credentials';
        break;

      case 'EMAIL_EXISTS':
        errorMessage = 'User already exists';
    }
    return throwError(errorMessage);
  }

}
