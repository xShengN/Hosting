import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Roomreser } from '../models/roomreser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RoomreserService {

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

  add(roomreser:Roomreser) : Observable<Roomreser>{
    return this.http.post<Roomreser>(this.baseUrl+'api/Roomreser',roomreser,httpOptions);
  }

  delete(roomreser:Roomreser | number) : Observable<Roomreser> {
    const id = typeof roomreser === 'number' ? roomreser : roomreser.id;
    const url = `${this.baseUrl+'api/Roomreser'}/${id}`;
    return this.http.delete<Roomreser>(url, httpOptions);
  }

  getRoomreserById(id:number) : Observable<Roomreser> {
    const url = `${this.baseUrl+'api/Roomreser'}/${id}`;
    return this.http.get<Roomreser>(url);
  }
}
