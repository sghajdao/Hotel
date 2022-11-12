import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomsServices } from '../services/customers.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {

  constructor(private service:RoomsServices, private route:Router) {
    
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject)=>{
      if (this.service.isAdmin)
        resolve(true);
      else{
        this.route.navigate(['/available'])
        resolve(false);
      }
    })
  }
  
}
