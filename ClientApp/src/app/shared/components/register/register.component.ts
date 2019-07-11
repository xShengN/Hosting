import { Component, OnInit } from '@angular/core';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';
import { RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UsersService, private loginServe: LoginService) { }
  users:Users;
  login:Login;

  ngOnInit() {
    this.users = { id: 0, password: '', firstName: '', lastname:''}; 
  }
  add(){
    this.loginServe.addLogin(this.login={id:this.users.id}).subscribe();
    this.userService.addUser(this.users).subscribe(users => {alert('Se agrego el usuario')});
  }

}
