import { Component,Output,EventEmitter,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { FormServiceService } from 'src/app/shared/form-service.service';
// import { TabIndexServiceService } from '../../tab-index-service.service';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.css']
})
export class AboutCompanyComponent implements OnInit{

  // countryCode:string = '+91'

  aboutCompanyForm : FormGroup;

  constructor(private formService:FormServiceService){}

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(){
    this.aboutCompanyForm = new FormGroup({
      companyName : new FormControl(''),
      country:new FormControl(''),
      addressLine1:new FormControl(''),
      addressLine2:new FormControl(''),
      city:new FormControl(''),
      zip:new FormControl(''),
      state:new FormControl('')
    })
  }


  @Output() tabDataEvent = new EventEmitter<number>();

  previousTab(){
    this.tabDataEvent.emit(0)
  }

  nextTab(form : NgForm){
    this.tabDataEvent.emit(2)
    console.log("Entered function");
    // console.log(form.value);
    this.formService.formData.push(form.value);
    
  }

  // onSubmit(){
  //   console.log(form);
  // }

}
