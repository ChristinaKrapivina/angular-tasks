import { Injectable } from '@angular/core';
import { Purchase } from '../models/purchase.model';

@Injectable()
export class LoggerService {
     alertPurchaseAdd(purchase: Purchase) {
          alert(`You have added ${purchase.amount} ${purchase.name}(s)!`);
     }
     alertPurchaseDelete(name: string) {
          alert(`You have deleted ${name}(s).`)
     }
}