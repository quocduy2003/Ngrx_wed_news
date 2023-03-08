import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:Auth,private authService:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve,reject)=>{
      onAuthStateChanged(this.auth,(userInfo)=>{
        if(userInfo){
          this.authService.user=userInfo;
          resolve(true);
          // this.router.navigate([`/home`]);
        }
        else{
          this.authService.user=null;
          window.alert("You need login to acess with page");
          resolve(false);
          this.router.navigate(['/login']);
        }
      })
    });
  }
  
}
