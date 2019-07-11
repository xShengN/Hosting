import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const Users = [
      { id:1024, password: '20ZeroTwo.', name: 'Santiago', lastname: 'Dueñas' }
    ];
    const Reservation = [ 
      {id:1003265245, name:'Santiago', lastname:'Dueñas',sex:'Masculino',datein:'06/10/2019', dateout:'06/12/2019', typeroom:'Normal' }
    ];
    const Room = [
      {id:1, type:'Normal', avidable: true },
      {id:2, type:'Normal', avidable: true },
      {id:3, type:'Premium', avidable: true },
      {id:4, type:'Premium', avidable: true },
      {id:5, type:'Doble', avidable: true },
      {id:6, type:'Doble', avidable: true },
      {id:7, type:'Doble', avidable: true },
      {id:8, type:'Normal', avidable: true },

    ];
    const Roomreser = [];
    return {Users, Reservation, Room, Roomreser};
  }
  constructor() { }
}
