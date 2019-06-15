import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Router } from "@angular/router";

@Injectable({
  providedIn:'root'
})
export class CheckuserIdGuardGuard implements  CanActivate{

  constructor(private dataService: DataService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const found = this.dataService.isUserExist(route.params['uuid']);
    console.log("found = "+found);
    if(found){
      return confirm('Do you want to view User Details?');
    }else{
      this.router.navigate(['error']);
    }  
    
  }
  
}
