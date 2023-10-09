import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService : AuthService){}

  email:string = '';
  password : string = ''

  registerOnSubmit(form:any){
    this.email = form.value.email;
    this.password = form.value.password;

    this.authService.register(this.email,this.password);

    this.email = '';
    this.password = '';
  }

}
