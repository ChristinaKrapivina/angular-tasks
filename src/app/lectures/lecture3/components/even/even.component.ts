import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subscription, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { SubService } from '../../services';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  evenNumbers: number[] = [];
  changedColor = false;

  @Input() set count(obs: Observable<number>) {
    if (!obs) return;

    this.subscription = obs
      .pipe(filter(num => num % 2 === 0))
      .subscribe(num => this.evenNumbers.push(num));
  }

  constructor( private subService: SubService ) { }

  ngOnInit(): void {
    this.subService.changeEven.subscribe({
      next: value => this.changedColor = value
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeColor() {
    this.subService.changeOdd.next(true);
  }

}
