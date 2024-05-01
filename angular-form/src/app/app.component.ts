import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-form';

  genderList: any = [
    { id: 'male', value: 'male', name: 'Male' },
    { id: 'female', value: 'female', name: 'Female' },
  ];

  defaultGender: string = 'male';

  firstName : string = '';
  lastName : string = '';
  userEmail : string = '';
  userCountry : string = '';
  userGender : string = '';

  submitClicked : boolean = false;

  onSubmit(myForm: NgForm) {
    console.log(myForm.value);

    this.firstName = myForm.value.personDetails.firstName;
    this.lastName = myForm.value.personDetails.lastName;
    this.userEmail = myForm.value.personDetails.email;
    this.userCountry = myForm.value.country;
    this.userGender = myForm.value.gender;

    this.submitClicked = true;

    myForm.reset();

  }

  setDefaultValue(myForm: NgForm) {
    // console.log('Default value set')
    // myForm.setValue({
    //   country: '',
    //   gender: this.defaultGender,
    //   personDetails: {
    //     firstName: 'Suhas',
    //     lastName: 'R K',
    //     email: 'suhasrk233@gmail.com',
    //   }
    // });

    myForm.form.patchValue({
      personDetails: {
        firstName: 'Suhas',
        lastName: 'R K',
        email: 'suhasrk233@gmail.com',
      }
    })
  }
}
