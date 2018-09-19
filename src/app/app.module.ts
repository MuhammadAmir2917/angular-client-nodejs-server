import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes : Routes = [
  { path : 'register' , component : RegisterComponent , pathMatch : 'full'},
  { path : 'login' , component : LoginComponent , pathMatch : 'full'},
  { path : 'dashboard' , component : DashboardComponent , pathMatch : 'full' , canActivate : [AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService , AuthGuard] , 
  bootstrap: [AppComponent]
})
export class AppModule { }
