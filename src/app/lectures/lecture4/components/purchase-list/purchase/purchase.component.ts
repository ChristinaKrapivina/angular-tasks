import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Purchase } from '../../../models/purchase.model';
import { PurchaseService } from '../../../services';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  @Input() purchase: Purchase;
  @ViewChild('updatedName') updatedName: ElementRef;
  @ViewChild('updatedAmount') updatedAmount: ElementRef;
  editorOpened: boolean = false;

  constructor( private purchaseService: PurchaseService ) { }

  ngOnInit(): void {
  }

  openEditor(): void {
    this.editorOpened = true;
  }

  duplicatePurchase(): void {
    this.purchaseService.duplicate(this.purchase);
  }

  deletePurchase(): void {
    this.purchaseService.delete(this.purchase);
  }

  saveEdit(): void {
    this.editorOpened = false;
    const updatedPurchase = new Purchase(
      this.updatedName.nativeElement.value,
      this.updatedAmount.nativeElement.value,
      this.purchase.id
    );
    this.purchaseService.edit(updatedPurchase);
  }

  cancelEdit(): void {
    this.editorOpened = false;
  }
}
