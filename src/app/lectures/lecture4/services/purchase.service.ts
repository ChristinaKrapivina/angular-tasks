import { Injectable } from '@angular/core';
import { Purchase } from '../models/purchase.model';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  purchaseList: Purchase[] = [
    {name: 'Apple', amount: 3, id: 0},
    {name: 'Banana', amount: 10, id: 1},
    {name: 'Orange', amount: 14, id: 2},
    {name: 'Garlic', amount: 1, id: 3},
  ];

  constructor( private alertService: AlertService ) { }

  add(name: string, amount: number): void {
    const purchase = new Purchase(name, amount, this.purchaseList.length);
    this.purchaseList.push(purchase);
    this.alertService.purchaseAdd(purchase);
  }

  edit(purchase: Purchase): void {
    this.purchaseList[purchase.id].name = purchase.name;
    this.purchaseList[purchase.id].amount = purchase.amount;
  }

  duplicate(purchase: Purchase): void {
    let index = this.purchaseList.indexOf(purchase);
    if (index !== -1) {
      const duplicatePurchase = new Purchase(purchase.name, purchase.amount, purchase.id + 1);
      this.purchaseList.splice(duplicatePurchase.id, 0, duplicatePurchase);
      for(let i = duplicatePurchase.id + 1; i < this.purchaseList.length; i++) {
        this.purchaseList[i].id += 1;
      }
    }
    this.alertService.purchaseDuplicate(purchase.name);
  }

  delete(purchase: Purchase) {
    let index = this.purchaseList.indexOf(purchase);
    if (index !== -1) {
      this.purchaseList.splice(index, 1);
      for(let i = index; i < this.purchaseList.length; i++) {
        this.purchaseList[i].id -= 1;
      }
    }
    this.alertService.purchaseDelete(purchase.name);
  }

  getPurchase(id: number) {
    return this.purchaseList[id];
  }

  getAll() {
    return this.purchaseList;
  }
}
