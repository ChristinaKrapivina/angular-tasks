import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

import { Purchase } from '../../../models/purchase.model';
import { PurchaseService } from '../../../services';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  @Input() purchase: Purchase;
  editorOpened: boolean = false;
  @ViewChild('updatedName') updatedName: ElementRef;
  @ViewChild('updatedAmount') updatedAmount: ElementRef;

  constructor( private purchaseService: PurchaseService ) { }

  ngOnInit(): void {
  }
  editPurchase(): void {
    this.editorOpened = true;
  }
  duplicatePurchase(): void {
    this.purchaseService.duplicatePurchase(this.purchase);
  }
  deletePurchase(): void {
    this.purchaseService.deletePurchase(this.purchase);
  }
  saveEdit(): void {
    this.editorOpened = false;
    const updatedPurchase = new Purchase(
      this.updatedName.nativeElement.value,
      this.updatedAmount.nativeElement.value,
      this.purchase.id
    );
    this.purchaseService.updatePurchase(updatedPurchase);
  }
  cancelEdit(): void {
    this.editorOpened = false;
  }
}
