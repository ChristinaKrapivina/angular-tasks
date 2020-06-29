import { Injectable } from '@angular/core';

import { Purchase } from '../models/purchase.model';
import { LoggerService } from './logger.service';

@Injectable()
export class PurchaseService {
     purchaseList: Purchase[] = [];

     constructor( private loggerService: LoggerService ){}

     addPurchase(purchase: Purchase) {
          const index = this.purchaseList.length;
          const newPurchase = {...purchase, id: index}
          this.purchaseList.push(newPurchase);
          this.loggerService.alertPurchaseAdd(newPurchase);
     }

     duplicatePurchase(purchase: Purchase) {
          const index = this.purchaseList.length;
          const newPurchase = {...purchase, id: index}
          this.purchaseList.push(newPurchase);
     }

     updatePurchase(purchase: Purchase) {
          this.purchaseList[purchase.id].name = purchase.name;
          this.purchaseList[purchase.id].amount = purchase.amount;
     }

     deletePurchase(purchase: Purchase) {
          let index = this.purchaseList.indexOf(purchase);
          if (index !== -1) {
               this.purchaseList.splice(index, 1);
               this.loggerService.alertPurchaseDelete(purchase.name);
          }
     }

     getAll() {
          return this.purchaseList;
     }
}