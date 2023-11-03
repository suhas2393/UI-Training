import { Component ,Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/shared/form-service.service';

@Component({
  selector: 'app-about-you',
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.css']
})
export class AboutYouComponent {

  @Output() tabDataEvent = new EventEmitter<number>();

  constructor(private router:Router,private formService: FormServiceService){}

  previousTab():void{
    this.router.navigate(['/login'])
  }

  nextTab(form : NgForm){
    this.tabDataEvent.emit(1);
    this.formService.formData.push(form.value);
    // console.log(form.value);
    // console.log(typeof(form.value));
  }

}
