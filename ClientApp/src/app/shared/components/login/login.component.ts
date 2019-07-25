import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:number;
  password:string;
  users:Users;

  constructor(private usersservice:UsersService, private router: Router) { }

  ngOnInit() {
    this.users = {id:0, password:'', firstName:'', lastname:''}
  }

  validation(){
    this.usersservice.login(this.users).subscribe(
      (res:any)=> {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
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
