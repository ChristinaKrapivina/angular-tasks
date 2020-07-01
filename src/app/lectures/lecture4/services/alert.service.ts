import { Injectable } from '@angular/core';
import { Purchase } from '../models/purchase.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  purchaseAdd(purchase: Purchase) {
    alert(`You have added ${purchase.amount} ${purchase.name}(s)!`);
  }
  purchaseDelete(name: string) {
    alert(`You have deleted ${name}(s).`)
  }
}
