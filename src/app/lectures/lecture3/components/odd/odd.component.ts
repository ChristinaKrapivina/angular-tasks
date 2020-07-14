import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {Observable, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import { SubService } from '../../services';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  oddNumbers: number[] = [];
  changedColor = false;

  @Input() set count(obs: Observable<number>) {
    if (!obs) return;

    this.subscription = obs
      .pipe(filter(num => num % 2 !== 0))
      .subscribe(num => this.oddNumbers.push(num));
  }

  constructor( private subService: SubService ) { }

  ngOnInit(): void {
    this.subService.changeOdd.subscribe({
      next: value => this.changedColor = value
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClick() {
    this.subService.changeEven.next(true)
  }
}
