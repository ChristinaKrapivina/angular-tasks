import { Component, OnInit } from '@angular/core';

import { Purchase } from './purchase.model';

@Component({
  selector: 'app-lecture4',
  templateUrl: './lecture4.component.html',
  styleUrls: ['./lecture4.component.scss']
})
export class Lecture4Component implements OnInit {
  purchases: Purchase[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onPurchaseAdd(purchase: Purchase): void {
    console.log('onPurchaseAdd Method', purchase);
    this.purchases.push(purchase);
  }

  onPurchaseDuplicate() {

  }

  onPurchaseDelete() {

  }

}
