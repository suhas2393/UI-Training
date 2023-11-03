import { Component,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormServiceService } from 'src/app/shared/form-service.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {

  @Output() tabDataEvent = new EventEmitter<number>();

  constructor(private formService:FormServiceService){}

  previousTab(){
    this.tabDataEvent.emit(1);
  }

  nextTab(form : NgForm){
    this.tabDataEvent.emit(3);
    // console.log(form.value);
    this.formService.formData.push(form.value);

  }

}
