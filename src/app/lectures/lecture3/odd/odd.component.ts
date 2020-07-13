import {Component, Input, OnDestroy} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnDestroy {
  private subscription: Subscription;
  oddNumbers: number[] = [];
  number: number;

  @Input() set count(obs: Observable<number>) {
    if (!obs) return;

    this.subscription = obs
      .pipe(filter(num => num % 2 !== 0))
      .subscribe(num => this.oddNumbers.push(num));
  }
  @Input() subject: Subject<string>;

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
