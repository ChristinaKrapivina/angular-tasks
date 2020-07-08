import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { PurchaseService } from '../../services';
import { Purchase } from '../../models/purchase.model';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-purchase-editor',
  templateUrl: './purchase-editor.component.html',
  styleUrls: ['./purchase-editor.component.scss']
})
export class PurchaseEditorComponent implements OnInit {
  originalPurchase: Purchase;
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
    this.originalPurchase = this.purchaseService.getPurchase(purchaseID);
    this.purchase = {... this.originalPurchase};
  }

  deletePurchase(): void {
    this.purchaseService.delete(this.originalPurchase);
    this.router.navigate(['/lecture4/purchase']);
  }

  saveEdit(): void {
    if (this.isUpdated()) {
      this.purchaseService.edit(this.purchase);
    }
    this.location.back();
  }

  cancelEdit(): void {
    this.location.back();
  }

  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if (this.isUpdated()) {
        return confirm('Are you sure you want to lose your edits?');
      }
      return true;
  }

  private isUpdated() {
    if (this.purchase.name !== this.originalPurchase.name ||
        this.purchase.amount !== this.originalPurchase.amount) {
      return true;
    }
    return false;
  }

}
