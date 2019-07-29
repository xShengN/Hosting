import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:number;
  loading = false;
  password:string;
  users:Users;
  ok:boolean;
  login:Login;

  constructor(private usersservice:UsersService, private router: Router, private loginService:LoginService) { }

  ngOnInit() {
    this.users = {id:0, password:'', firstName:'', lastname:''}
  }

  validation(){
    this.loading = true;
    this.usersservice.login(this.users).subscribe(
      (res:any)=> {
        localStorage.setItem('token', res.token);
        this.loginService.getLoginById(this.users.id).subscribe(data=>{
          this.router.navigateByUrl('/adhome')
          },
          err =>{

           this.router.navigateByUrl('/home');
          });
        
      },
      err => {
        this.loading = false;
        if (err.status == 404 ){
          alert ('Usuario incorrecto')
        }
        else {
          console.log(err);
        }
        if(err.status == 400) {
          alert ('Contraseña incorrecta')
        }
        else {
          console.log(err);
        }
      }
    );
  }

  
}
