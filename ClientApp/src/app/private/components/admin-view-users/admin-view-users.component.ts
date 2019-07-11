import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-view-users',
  templateUrl: './admin-view-users.component.html',
  styleUrls: ['./admin-view-users.component.css']
})
export class AdminViewUsersComponent implements OnInit {
  userss:Users[]

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.usersService.getAllUsers().subscribe(userss => this.userss = userss);
  }


}
