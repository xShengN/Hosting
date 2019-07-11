import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-admin-view-rooms',
  templateUrl: './admin-view-rooms.component.html',
  styleUrls: ['./admin-view-rooms.component.css']
})
export class AdminViewRoomsComponent implements OnInit {
  rooms:Room[];

  constructor(private roomService:RoomService) { }

  ngOnInit() {
    this.getAllRooms();

  }

  getAllRooms(){
    this.roomService.getAllRooms().subscribe(rooms => this.rooms = rooms);
  }

}
