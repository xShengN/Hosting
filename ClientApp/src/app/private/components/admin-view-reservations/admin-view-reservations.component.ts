import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../../models/reservation';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  selector: 'app-admin-view-reservations',
  templateUrl: './admin-view-reservations.component.html',
  styleUrls: ['./admin-view-reservations.component.css']
})
export class AdminViewReservationsComponent implements OnInit {
  reservations:Reservation[];

  constructor(private reservationService: ReservationService) { } 

  ngOnInit() {
    this.getAll();
  }
  
  getAll(){
    this.reservationService.getAllReservations().subscribe(reservations => this.reservations = reservations);
  }

}
