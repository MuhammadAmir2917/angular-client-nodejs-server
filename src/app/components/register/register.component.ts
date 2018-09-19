import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user : User = new User();

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  register(){
    this.userService.register(this.user).subscribe(res => {
      console.log(res);
    }, err =>{
      console.log(err);
    })
  }

}
