import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Purchase } from '../../models/purchase.model';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.scss']
})
export class PurchaseDetailsComponent implements OnInit {
  purchase: Purchase;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(params => this.purchase = params['purchase']);
  }

  openEditor(): void {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: "preserve"} );
  }

}
