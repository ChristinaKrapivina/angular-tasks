import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SubService {
  changeEven = new Subject<boolean>();
  changeOdd = new Subject<boolean>();

  constructor() { }
}
