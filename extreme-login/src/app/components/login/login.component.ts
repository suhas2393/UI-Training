import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseAuthService } from 'src/app/shared/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private firebaseAuth : FirebaseAuthService){}

  loginUser(form:NgForm){
    let userEmail = form.value.username;
    let userPassword = form.value.password;
    this.firebaseAuth.login(userEmail,userPassword).subscribe(
      (responseData)=>{
        console.log(responseData);
        alert('Login successful')
      },
      err=>{
        console.log(err);
        
      }
    )
  }

}
