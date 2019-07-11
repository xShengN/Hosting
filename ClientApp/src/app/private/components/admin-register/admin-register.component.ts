import { Component, OnInit } from '@angular/core';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  constructor(private userService: UsersService, private loginServe: LoginService, private route: ActivatedRoute) { }
  users:Users;
  login:Login;

  ngOnInit() { 
    const id = +this.route.snapshot.paramMap.get('id');
    this.users = { id: id, password: '', firstName: '', lastname:''}; 
    this.login = {id:id};
  }

  add(){
    this.userService.addUser(this.users).subscribe();
    this.loginServe.addLogin(this.login).subscribe(login=> (alert('Se ha creado correctamente el usaruio')));
  }

}
