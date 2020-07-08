import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Purchase } from '../models/purchase.model';
import { PurchaseService } from '../services';

@Injectable()
export class PurchaseResolveGuard implements Resolve<Purchase> {

  constructor( private purchaseService: PurchaseService ) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): 
          Purchase | Observable<Purchase> | Promise<Purchase> {
    return this.purchaseService.getPurchase(+route.params.purchaseID);
  }
  
}
