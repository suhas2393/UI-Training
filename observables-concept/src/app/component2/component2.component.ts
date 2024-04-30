import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
})
export class Component2Component implements OnInit {

  inputText: string = '';

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.dataService.dataEmmitter.subscribe((value) => {
      // console.log("From component 2 :",value);
      this.inputText = value;
    });
  }

  
}
