import { Component } from '@angular/core';
import { Observable, filter, from, interval, map, of } from 'rxjs';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataServiceService],
})
export class AppComponent {
  title = 'observables-concept';

  constructor(private dataService: DataServiceService) {}

  data: any[] = [];

  array1 = [1, 3, 4, 5, 6];
  array2 = ['A', 'B', 'C', 'D', 'E'];

  // myObservable = of(this.array1 , this.array2 , 'Suhas' , true , 1);
  myObservable = from(this.array1);

  transformedObs = this.myObservable.pipe(
    map((val) => {
      return val * 5;
    }),
    filter((val) => {
      return val >= 30;
    })
  );

  filteredObs = this.transformedObs.pipe(
    filter((val) => {
      return val >= 30;
    })
  );

  countObserver = interval(1000);
  counterSub : any;
  // Observable
  // myObservable = new Observable((observer) => {
  //   // observer.next([1, 2, 3, 4, 5]);
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);

  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);

  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);

  // setTimeout(() => {
  //   observer.error(
  //     new Error('Something went wrong, Please try again later!!!')
  //   );
  // }, 3000);

  //Once error is emmitted, we dont get any emmisions

  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 4000);

  //   setTimeout(() => {
  //     observer.next(5);
  //   }, 5000);

  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  // });

  //Observer
  getAsyncData() {
    // this.myObservable.subscribe({
    // (val: any) => {
    //   // this.data = val;
    //   this.data.push(val);
    // },
    // (err) => {
    //   // alert(err)
    //   alert(err.message);
    // },
    // ()=>{
    //   alert("All data stream has been emmitted");
    // }

    this.transformedObs.subscribe({
      next: (val: any) => {
        this.data.push(val);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        alert('All data stream has been emmitted');
      },
    });

    // );
  }

  subscribe() {

    this.counterSub = this.countObserver.subscribe((value)=>{
      console.log(value);
    })
  }

  unSub() {
    this.counterSub.unsubscribe()
  }
}
