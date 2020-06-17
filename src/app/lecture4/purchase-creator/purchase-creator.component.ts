import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

import { Purchase } from '../purchase.model';

@Component({
  selector: 'app-purchase-creator',
  templateUrl: './purchase-creator.component.html',
  styleUrls: ['./purchase-creator.component.scss']
})

export class PurchaseCreatorComponent implements OnInit {
  @ViewChild('purchaseName') purchaseName: ElementRef;
  @ViewChild('purchaseAmount') purchaseAmount: ElementRef;

  @Output() createPurchase: EventEmitter<Purchase> = new EventEmitter<Purchase>();

  constructor() { }

  ngOnInit(): void {
  }

  onCreatePurchase(): void {
    const purchase = new Purchase(
      this.purchaseName.nativeElement.value,
      this.purchaseAmount.nativeElement.value,
    );
    this.createPurchase.emit(purchase);
  }
}
