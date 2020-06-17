import { Component, OnInit } from '@angular/core';

import { Purchase } from './purchase.model';

@Component({
  selector: 'app-lecture4',
  templateUrl: './lecture4.component.html',
  styleUrls: ['./lecture4.component.scss']
})
export class Lecture4Component implements OnInit {
  purchaseList: Purchase[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onPurchaseAdd(purchase: Purchase): void {
    this.purchaseList.push(purchase);
  }

  onDuplicatePurchase(purchase: Purchase) {
    let itemIndex = this.purchaseList.indexOf(purchase);
    if (itemIndex !== -1) {
      this.purchaseList.splice(itemIndex, 0, purchase);
    }
  }

  onDeletePurchase(purchase: Purchase) {
    let itemIndex = this.purchaseList.indexOf(purchase);
    if (itemIndex !== -1) {
      this.purchaseList.splice(itemIndex, 1);
    }
  }
}
