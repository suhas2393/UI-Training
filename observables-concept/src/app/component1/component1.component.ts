import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
})
export class Component1Component {

  constructor(private dataService : DataServiceService){

  }


  enteredText: string = '';

  onSubmit() {
    // console.log(this.enteredText);
    this.dataService.raiseDataEmmitterEvent(this.enteredText);
  }
}
