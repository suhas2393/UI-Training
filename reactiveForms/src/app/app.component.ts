import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'reactiveForms';

  reactiveForms: FormGroup;

  ngOnInit() {
    this.reactiveForms = new FormGroup({

      personalDetails : new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null,Validators.required),
        email: new FormControl(null,[Validators.email,Validators.required])
      }),
      country: new FormControl('usa'),
      gender: new FormControl('male'),
      hobbies: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.reactiveForms);
  }
}
