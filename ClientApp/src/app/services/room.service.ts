import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Room } from '../models/room'; 

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string) { }

  private log (message: string){
    alert(`UsersService:${message}`);
  }

  private handleError<T> (operation = 'operation', result? : T){
    return (error:any):Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
  
  addRoom(room:Room) : Observable<Room>{
    return this.http.post<Room>(this.baseUrl+'api/Room',room,httpOptions);
  }

  updateRoom(room:Room) : Observable<any> {
    const url = `${this.baseUrl+'api/Room'}/${room.id}`;
    return this.http.put(url, room, httpOptions);
  }

  getAllRooms() : Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUrl+'api/Room');
  }

  getRoomById(id:number) : Observable<Room> {
    const url = `${this.baseUrl+'api/Room'}/${id}`;
    return this.http.get<Room>(url);
  }
}
