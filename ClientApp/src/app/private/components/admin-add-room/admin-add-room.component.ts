import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-admin-add-room',
  templateUrl: './admin-add-room.component.html',
  styleUrls: ['./admin-add-room.component.css']
})
export class AdminAddRoomComponent implements OnInit {
  id:number;
  room:Room;
  type:string;
  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.type='Normal';
  }

  addRoom(){
    this.room = {id:this.id, avidable:true, type:this.type};
    this.roomService.addRoom(this.room).subscribe(room => (alert('Se ha agregado correctamente')));
  }

}
