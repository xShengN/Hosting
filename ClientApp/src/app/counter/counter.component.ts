import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
  users:Users;
  constructor(private usersservice:UsersService) { }
  ngOnInit() {
   
  }

  validation(){
    this.usersservice.validation(this.users.id, this.users.password).subscribe(users => {
      alert('Comprobando')
    });
  }

  
} 
