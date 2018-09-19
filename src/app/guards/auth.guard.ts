import { User } from './../models/user';
import { UserService} from './../services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public user : User;

  constructor(private userService : UserService , private router : Router){
    this.user = this.userService.getLoggedInUser();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    if(!this.user){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
