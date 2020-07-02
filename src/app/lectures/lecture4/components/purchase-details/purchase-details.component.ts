import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PurchaseService } from '../../services';
import { Purchase } from '../../models/purchase.model';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.scss']
})
export class PurchaseDetailsComponent implements OnInit {
  purchase: Purchase;
  @ViewChild('updatedName') updatedName: ElementRef;
  @ViewChild('updatedAmount') updatedAmount: ElementRef;
  editorOpened: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private purchaseService: PurchaseService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPurchase();
  }

  getPurchase(): void {
    const id = +this.route.snapshot.paramMap.get('purchaseID');
    this.purchase = this.purchaseService.getPurchase(id);
  }

  openEditor(): void {
    this.editorOpened = true;
  }

  duplicatePurchase(): void {
    this.purchaseService.duplicate(this.purchase);
    this.location.back();
  }

  deletePurchase(): void {
    this.purchaseService.delete(this.purchase);
    this.location.back();
  }

  saveEdit(): void {
    this.editorOpened = false;
    const updatedPurchase = new Purchase(
      this.updatedName.nativeElement.value,
      this.updatedAmount.nativeElement.value,
      this.purchase.id
    );
    this.purchaseService.edit(updatedPurchase);
    this.location.back();
  }

  cancelEdit(): void {
    this.editorOpened = false;
  }

}
