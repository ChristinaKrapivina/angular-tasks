import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Purchase } from '../../purchase.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  @Input() purchase: Purchase;

  @Output() duplicatePurchase: EventEmitter<Purchase> = new EventEmitter();
  @Output() deletePurchase: EventEmitter<Purchase> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDuplicatePurchase(): void {
    this.duplicatePurchase.emit(this.purchase);
  }
  onDeletePurchase(): void {
    this.deletePurchase.emit(this.purchase);
  }
}
