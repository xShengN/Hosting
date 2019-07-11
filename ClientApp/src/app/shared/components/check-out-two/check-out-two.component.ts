import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';
import { Location } from '@angular/common';
import { RoomreserService } from 'src/app/services/roomreser.service';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room';
import { Roomreser } from 'src/app/models/roomreser';
import { Pather } from 'src/app/models/Pather';
import { AcompañanteService } from 'src/app/services/acompañante.service';

@Component({
  selector: 'app-check-out-two',
  templateUrl: './check-out-two.component.html',
  styleUrls: ['./check-out-two.component.css']
})
export class CheckOutTwoComponent implements OnInit {
   reservation:Reservation;
   room:Room;
   roomre:Roomreser;
   roomres:Roomreser[];
   pathers:Pather[];
   rooms:Room[];
   idaux:number;
   i:number;

  constructor(private route: ActivatedRoute, private reservationService: ReservationService, private location: Location, private roomreSe:RoomreserService, private roomSe:RoomService, private acompañanteService:AcompañanteService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idaux = id;
    this.get();
    this.i=0;
  }

  goBack():void{
    this.location.back();
  }

  get() : void {
    this.reservationService.getbyId(this.idaux).subscribe (reservation=> this.reservation = reservation);

    this.roomreSe.getRoomreserById(this.idaux).subscribe(roomre => this.roomre = roomre);
    
  }

  validar(id: number): boolean{
    if (id===this.idaux){
      return true;
    } else {
      return false;
    }
  }

  load(){
    this.acompañanteService.getAllAcompañantes().subscribe(pathers => this.pathers = pathers);
    this.roomSe.getRoomById(this.roomre.idRoom).subscribe(room => this.room = room);
    this.i=1;
  }


  delete() : void { 
    this.room = {id:this.i, avidable:true, type: this.room.type};
    this.roomSe.updateRoom(this.room).subscribe();
    this.roomreSe.delete(this.reservation.id).subscribe();
    this.reservationService.deleteReservation(this.reservation).subscribe(reservation => this.location.back()); 
  }
}
