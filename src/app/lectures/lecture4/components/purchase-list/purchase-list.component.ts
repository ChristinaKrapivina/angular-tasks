import { Component, OnInit } from '@angular/core';

import { Purchase } from '../../models/purchase.model';
import { PurchaseService } from '../../services';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {
  purchaseList: Purchase[];

  constructor( private purchaseService: PurchaseService ) { }

  ngOnInit(): void {
    this.purchaseList = this.purchaseService.getAll();
  }
}
