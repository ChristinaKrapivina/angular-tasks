import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

import { Purchase } from '../../models/purchase.model';

@Component({
  selector: 'app-purchase-creator',
  templateUrl: './purchase-creator.component.html',
  styleUrls: ['./purchase-creator.component.scss']
})

export class PurchaseCreatorComponent implements OnInit {
  @ViewChild('purchaseName') purchaseName: ElementRef;
  @ViewChild('purchaseAmount') purchaseAmount: ElementRef;

  @Output() createPurchase: EventEmitter<Purchase> = new EventEmitter<Purchase>();

  missingValue: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  checkPresence(element: ElementRef) {
    this.missingValue = element.nativeElement.validity.valueMissing;
  }

  onCreatePurchase(): void {
    this.checkPresence(this.purchaseName);
    
    if (!this.missingValue) {
      const purchase = new Purchase(
        this.purchaseName.nativeElement.value,
        this.purchaseAmount.nativeElement.value,
      );
      this.createPurchase.emit(purchase);
    }
  }
}
