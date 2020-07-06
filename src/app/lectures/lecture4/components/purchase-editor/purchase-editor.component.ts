import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from '../../services';
import { Purchase } from '../../models/purchase.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-purchase-editor',
  templateUrl: './purchase-editor.component.html',
  styleUrls: ['./purchase-editor.component.scss']
})
export class PurchaseEditorComponent implements OnInit {
  @ViewChild('updatedName') updatedName: ElementRef;
  @ViewChild('updatedAmount') updatedAmount: ElementRef;
  purchase: Purchase;
  allowEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private purchaseService: PurchaseService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getPurchase(+params.purchaseID));
    this.route.queryParams.subscribe(params => this.allowEdit = !!+params.allowEdit);
  }
  
  getPurchase(purchaseID: number): void {
    this.purchase = this.purchaseService.getPurchase(purchaseID);
  }

  deletePurchase(): void {
    this.purchaseService.delete(this.purchase);
    this.router.navigate(['/lecture4/purchase']);
  }

  saveEdit(): void {
    const updatedPurchase = new Purchase(
      this.updatedName.nativeElement.value,
      this.updatedAmount.nativeElement.value,
      this.purchase.id
    );
    this.purchaseService.edit(updatedPurchase);
    this.location.back();
  }

  cancelEdit(): void {
    this.location.back();
  }
}
