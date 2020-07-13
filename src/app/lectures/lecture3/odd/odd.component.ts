import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable, Observer, Subject, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {
  // @Input() inputSubject: Subject<number>;
  // oddObserver: Observer<number>;
  private subscription: Subscription;
  @Input() count: Observable<number>;
  @Input() subject: Subject<string>;

  oddNumbers: number[] = [];
  number: number;

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.count
      .pipe(
        filter(num => num % 2 !== 0)
      )
      .subscribe(num => this.oddNumbers.push(num))
    // this.subject = this.inputSubject;
    // this.oddObserver = {
    //   next: num => console.log(num),
    //   error: err => console.log(err),
    //   complete: () => console.log('Observer got a complete no')
    // }
    // this.subject.subscribe(this.oddObserver);
  }

}
