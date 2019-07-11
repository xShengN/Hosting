import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/reservation';
import { Location } from '@angular/common';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  constructor(private reservationService: ReservationService, private location: Location) { }
  reservation: Reservation;
  ok=0;

  ngOnInit() {
    this.reservation = { id:0, name:'', lastname:'', typeroom:'Normal', sex: 'Masculino', datein:'06/11/2019', dateout:'06/14/2019'}
  }

  add(){
    this.reservationService.addReservation(this.reservation).subscribe(reservation=>(this.ok=1));
    
  }
}
