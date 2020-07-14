import { Component, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-lecture3',
  templateUrl: './lecture3.component.html',
  styleUrls: ['./lecture3.component.scss']
})
export class Lecture3Component {
  started = false;
  count$: Observable<number>;

  constructor() { }

  start() {
    this.started = true;

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
  }

}
