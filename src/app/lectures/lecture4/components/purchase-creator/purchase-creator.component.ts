import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

import { Purchase } from '../../models/purchase.model';
import { PurchaseService } from '../../services';

@Component({
  selector: 'app-purchase-creator',
  templateUrl: './purchase-creator.component.html',
  styleUrls: ['./purchase-creator.component.scss']
})

export class PurchaseCreatorComponent implements OnInit {
  @ViewChild('purchaseName') purchaseName: ElementRef;
  @ViewChild('purchaseAmount') purchaseAmount: ElementRef;

  missingValue: boolean;

  constructor( private purchaseService: PurchaseService ) { }

  ngOnInit(): void {
  }

  checkPresence(element: ElementRef) {
    this.missingValue = element.nativeElement.validity.valueMissing;
  }

  onCreatePurchase(): void {
    this.checkPresence(this.purchaseName);
    
    if (!this.missingValue) {
      this.purchaseService.add(
        this.purchaseName.nativeElement.value,
        this.purchaseAmount.nativeElement.value);
    }
  }
}
