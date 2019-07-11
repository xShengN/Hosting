import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:number;
  password:string;
  users:Users;

  constructor(private usersservice:UsersService) { }

  ngOnInit() {
  }

  validation(){
    this.usersservice.getbyId(this.id).subscribe(users => this.users = users)
    if (this.users.id==this.id && this.users.password == this.password){
      
    }
  }
  
}
