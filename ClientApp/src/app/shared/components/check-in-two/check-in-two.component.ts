import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { Roomreser } from 'src/app/models/roomreser';
import { RoomreserService } from 'src/app/services/roomreser.service';

@Component({
  selector: 'app-check-in-two',
  templateUrl: './check-in-two.component.html',
  styleUrls: ['./check-in-two.component.css']
})
export class CheckInTwoComponent implements OnInit {
  rooms:Room[];
  reservations:Reservation[];
  roomreser:Roomreser;
  auxrooms:Room;
  roomselected:number;

  constructor(private roomService:RoomService, private route: ActivatedRoute, private reservationService:ReservationService, private roomreserService:RoomreserService) { }

  ngOnInit() {
    this.getAll();
    this.getId();
  }

  getAll(){
    this.roomService.getAllRooms().subscribe(rooms=>this.rooms=rooms);
  }

  getId(){
    const id = +this.route.snapshot.paramMap.get('id');
   /*  const idper = +this.route.snapshot.paramMap.get('idpe'); */
    this.reservationService.getbyId(id).subscribe(reservations => this.reservations = reservations);/* 
    this.roomService.getRoomById(idper).subscribe(auxrooms => this.auxrooms = auxrooms); */
  }

  update(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.roomService.getRoomById(this.roomselected).subscribe(auxrooms => this.auxrooms = auxrooms);
    this.auxrooms.avidable=false;
    this.roomService.updateRoom(this.auxrooms);
    this.roomreser.id=this.roomselected;
    this.roomreser.idRoom=id;
    this.roomreserService.add(this.roomreser);
  }


}
