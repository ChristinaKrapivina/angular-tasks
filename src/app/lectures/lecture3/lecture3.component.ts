import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lecture3',
  templateUrl: './lecture3.component.html',
  styleUrls: ['./lecture3.component.scss']
})
export class Lecture3Component implements OnInit {
  // evenNumbers:number[] = [];
  // oddNumbers: number[] = [];
  count$: Observable<number>;

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.count$ = new Observable(observer => {
      let count = 1;
      setInterval(() => {
        if (count > 10) {
          observer.complete();
        }
        observer.next(count);
        count++;
      }, 1000);
    });
    // if(number % 2 === 0) {
    //   this.evenNumbers.push(number);
    // } else {
    //   this.oddNumbers.push(number);
    // }
  }

}
