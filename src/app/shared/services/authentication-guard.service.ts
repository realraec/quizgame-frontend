import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { TokenStorageService } from "./token-storage.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private router: Router, private tokenStorageService: TokenStorageService){

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        if(this.tokenStorageService.getIsAuth() == "true"){
            return true;
        }else{
            this.router.navigate([""]);
            return false;

        }

    }
}