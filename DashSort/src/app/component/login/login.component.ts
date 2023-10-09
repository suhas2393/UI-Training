import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService:AuthService){}
  email:string = '';
  password:string = '';

  loginOnSubmit(form:any){
    console.log(form.value)
    this.email = form.value.email;
    this.password = form.value.password;

    if(this.email === '' || this.password === ''){
      alert('Enter all the values');
      return;
    }

    this.authService.login(this.email,this.password);

    this.email = '';
    this.password = '';

  }

}
