import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   baseUrl : string = "http://localhost:3000/users";
  constructor(private http : HttpClient) { }

  getUsers() : Observable<any>{
    return this.http.get(`${this.baseUrl}/users` , {responseType : 'json'}); 
  }

  register(user : User) : Observable<any> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  login(user : User) : Observable<any>{
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  setLoggedInUser(token , user){
    localStorage.setItem('x-auth-token' , token);
    localStorage.setItem('user' , JSON.stringify(user));
  }

  getXAuthToken(){
    return localStorage.getItem('x-auth-token');
  }

  getLoggedInUser() : User{
    return JSON.parse(localStorage.getItem('user'));
  }

  removeLoggedInUser(){
    localStorage.removeItem('user');
    localStorage.removeItem('x-auth-token');
  }
}
