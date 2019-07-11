import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-prereg',
  templateUrl: './prereg.component.html',
  styleUrls: ['./prereg.component.css']
})
export class PreregComponent implements OnInit {
  login:Login;
  ok:number;
  id:number;
  idp:number;

  constructor(private loginService : LoginService) { }

  ngOnInit() {
    this.ok=0;
  }

  getId(){
    this.loginService.getLoginById(this.id).subscribe()
    this.ok=1;
  }

}
