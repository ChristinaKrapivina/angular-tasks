import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Purchase } from './../purchase.model';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {
  @Input() purchaseList: Purchase[];
  @Output() duplicatePurchase: EventEmitter<Purchase> = new EventEmitter();
  @Output() deletePurchase: EventEmitter<Purchase> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDuplicatePurchase(purchase: Purchase): void {
    this.duplicatePurchase.emit(purchase);
    console.log('Duplicated', purchase);
  }
  onDeletePurchase(purchase: Purchase): void {
    this.deletePurchase.emit(purchase);
    console.log('Deleted', purchase);
  }
}
