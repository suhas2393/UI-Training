import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  // dataEmmitter = new EventEmitter<string>();

  dataEmmitter = new Subject<string>();

  raiseDataEmmitterEvent(data: string) {
    this.dataEmmitter.next(data);    
  }
}
