import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private authService:AuthService){

  }
  loggedInUser = this.authService.getUser();
  ngOnInit(): void {
    
    console.log(this.loggedInUser);
    
  }

  
  
}
