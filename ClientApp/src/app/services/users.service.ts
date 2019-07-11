import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Users } from '../models/users'; 
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

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

  addUser(users : Users): Observable<Users>{
    return this.http.post<Users>(this.baseUrl+'api/Users', users, httpOptions);
  }

  getAllUsers():Observable<Users[]>{
    return this.http.get<Users[]>(this.baseUrl+'api/Users');
  }

  validation(id:number, password: string) : Observable<Users> {
    return this.http.post<Users>(this.baseUrl+'api/Users',{id, password}).pipe(tap(_=> this.log(`Locking in the database`)),catchError(this.handleError<Users>(`Validation:`)));
  }

  getbyId(id:number) : Observable<Users> {
    const url = `${this.baseUrl+'api/Users'}/${id}`;
    return this.http.get<Users>(url);
  }

  updateUser(users:Users) : Observable<any> {
    const url = `${this.baseUrl+'api/Users'}/${users.id}`;
    return this.http.put(url, users, httpOptions);
  }
}

