import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : User = new User();
  public errMessage : boolean = false;

  constructor(private userService : UserService, private router : Router) { 
   
  }

  ngOnInit() {
  }

  login(){
    this.errMessage=false;
    this.userService.login(this.user).subscribe(res=>{
      
      if(!res.result){
        this.errMessage=true;
      }else{
        this.userService.setLoggedInUser(res.token, res.user);
      this.router.navigate(['dashboard']);
      }
    } , err => {
      console.log(err);
    });
  }

}
