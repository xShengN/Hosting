import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { Roomreser } from 'src/app/models/roomreser';
import { RoomreserService } from 'src/app/services/roomreser.service';
import { Location } from '@angular/common';
import { Pather } from 'src/app/models/Pather';
import { AcompañanteService } from 'src/app/services/acompañante.service';

@Component({
  selector: 'app-checkinthree',
  templateUrl: './checkinthree.component.html',
  styleUrls: ['./checkinthree.component.css']
})
export class CheckinthreeComponent implements OnInit {
  pathers:Pather[]
  reservation:Reservation;
  roomreser:Roomreser;
  auxrooms:Room;
  auxid:number;
  auxidperson:number;
  idHigh:number;

  constructor(private roomService:RoomService, private acompañanteService:AcompañanteService, private route: ActivatedRoute, private reservationService:ReservationService, private roomreserService:RoomreserService, private location:Location) { }

  ngOnInit() {
    
    const id = +this.route.snapshot.paramMap.get('idPerson');
    const idRoom = +this.route.snapshot.paramMap.get("id");
    this.auxid= idRoom;
    this.idHigh= id;
    this.acompañanteService.getAllAcompañantes().subscribe(pathers => this.pathers = pathers);
    this.roomService.getRoomById(this.auxid).subscribe(auxrooms => this.auxrooms = auxrooms);
  }

  update(){
    
    this.auxrooms = { id:this.auxrooms.id, avidable: false, type:this.auxrooms.type };
    this.roomService.updateRoom(this.auxrooms).subscribe();
    this.roomreser = { id:this.auxidperson, idRoom:this.auxid};
    this.roomreserService.add(this.roomreser).subscribe(roomreser=>(this.location.back()));
  }

  goBack(){
    this.location.back();
  }

}
