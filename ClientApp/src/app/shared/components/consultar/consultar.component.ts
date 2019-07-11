import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  reservation:Reservation;
  auxid:number;
  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
  }
  getbyId(){
    this.reservationService.getbyId(this.auxid).subscribe(reservation=>this.reservation=reservation);
  }

}
