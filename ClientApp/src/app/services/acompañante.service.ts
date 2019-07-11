import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pather } from '../models/Pather';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AcompañanteService {

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

  addAcompañante(pather:Pather) : Observable<Pather>{
    return this.http.post<Pather>(this.baseUrl+'api/Pather',pather,httpOptions); 
  }

  updateAcompañante(pather:Pather) : Observable<any> {
    const url = `${this.baseUrl+'api/Pather'}/${pather.id}`;
    return this.http.put(url, pather, httpOptions);
  }

  getAllAcompañantes() : Observable<Pather[]> {
    return this.http.get<Pather[]>(this.baseUrl+'api/Pather');
  }

  getAcompañanteById(id:number) : Observable<Pather> {
    const url = `${this.baseUrl+'api/Pather'}/${id}`;
    return this.http.get<Pather>(url);
  }
}
