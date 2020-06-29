import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

import { Purchase } from '../../models/purchase.model';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-purchase-creator',
  templateUrl: './purchase-creator.component.html',
  styleUrls: ['./purchase-creator.component.scss']
})

export class PurchaseCreatorComponent {
  @ViewChild('purchaseName') purchaseName: ElementRef;
  @ViewChild('purchaseAmount') purchaseAmount: ElementRef;

  missingValue: boolean;

  constructor( private purchaseService: PurchaseService ) { }

  checkPresence(element: ElementRef) {
    this.missingValue = element.nativeElement.validity.valueMissing;
  }

  createPurchase(): void {
    this.checkPresence(this.purchaseName);
    
    if (!this.missingValue) {
      const purchase = new Purchase(
        this.purchaseName.nativeElement.value,
        this.purchaseAmount.nativeElement.value,
      );
      this.purchaseService.addPurchase(purchase);
    }
  }
}
