import { Component } from '@angular/core';

@Component({
  selector: 'app-get-info',
  templateUrl: './get-info.component.html',
  styleUrls: ['./get-info.component.css']
})
export class GetInfoComponent {


  tabIndex:number=0;

  onTabClick(index:number){
    this.tabIndex = index;
    
    // console.log(this.tabIndex);
  }

  

  

  


}
