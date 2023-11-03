import { Component,Output,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/shared/firebase-auth.service';
import { FormServiceService } from 'src/app/shared/form-service.service';

@Component({
  selector: 'app-account-review',
  templateUrl: './account-review.component.html',
  styleUrls: ['./account-review.component.css']
})
export class AccountReviewComponent {

  @Output() tabDataEvent = new EventEmitter<number>();

  constructor(private router : Router,private formService: FormServiceService,private firebaseAuth:FirebaseAuthService){}

  previousTab(){
    this.tabDataEvent.emit(2)
  }

  nextTab(form : NgForm){

    this.router.navigate(['/login']);
    this.formService.formData.push(form.value)

    const data1 = this.formService.formData[0];
    const data2 = this.formService.formData[1];
    const data3 = this.formService.formData[2];
    const data4 = this.formService.formData[3];

    const arrData = Object.entries(this.formService.formData[0]);

    for(let i=0;i<arrData.length;i++){
      if(arrData[i][0] === 'username'){
        var userEmail = arrData[i][1];
      }
      if (arrData[i][0] === 'password') {
        var userPassword = arrData[i][1];
      } 

      else{
        continue;
      }
    }

    this.firebaseAuth.signUp(userEmail,userPassword).subscribe(
      (responseData)=>{
        console.log(responseData);
        alert('Registration successful')
      },
      err=>{
        console.log(err);

      }
    )


    Object.assign(data1,data2,data3,data4)
    this.firebaseAuth.addUserData(data1).subscribe(
      (responseData)=>{
        console.log(responseData);
      }
    )
    
    

    // console.log(data1);

    


  }

}
