import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Reservation } from '../models/reservation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

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

  addReservation(reservation : Reservation): Observable<Reservation>{
    return this.http.post<Reservation>(this.baseUrl+'api/Reservation', reservation, httpOptions);
  }

  getAllReservations():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.baseUrl+'api/Reservation');
  }

  getbyId(id:number) : Observable<Reservation[]> {
    const url = `${this.baseUrl+'api/Reservation'}/${id}`;
    return this.http.get<Reservation[]>(url);
  }

  updateReservation(reservation:Reservation) : Observable<any> {
    const url = `${this.baseUrl+'api/Reservation'}/${reservation.id}`;
    return this.http.put(url, reservation, httpOptions);
  }

  disableActive(id:number) {
    const url = `${this.baseUrl+'api/Reservation/disable'}/${id}`;
    return this.http.put(url, httpOptions);
  }

  deleteReservation(reservation : Reservation | number): Observable<Reservation>{
    const id = typeof reservation === 'number' ? reservation : reservation.id;
    const url = `${this.baseUrl+'api/Reservation'}/${id}`;
    return this.http.delete<Reservation>(url, httpOptions);
  }

  
}
