import { Component, OnInit, Output, Input } from '@angular/core';
import { Observable, Subscription, Observer, Subject } from 'rxjs';

@Component({
  selector: 'app-lecture3',
  templateUrl: './lecture3.component.html',
  styleUrls: ['./lecture3.component.scss']
})
export class Lecture3Component implements OnInit {
  // evenNumbers:number[] = [];
  // oddNumbers: number[] = [];
  parentSubject = new Subject<string>();
  count$: Observable<number> = new Observable(observer => {
    let count = 1;
    setInterval(() => {
      if (count > 10) observer.complete();
      observer.next(count);
      count++;
    }, 1000)
  });

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.parentSubject.next('start');
    // if(number % 2 === 0) {
    //   this.evenNumbers.push(number);
    // } else {
    //   this.oddNumbers.push(number);
    // }
  }

}
