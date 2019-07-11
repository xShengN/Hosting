import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Login } from '../models/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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

  addLogin(login:Login) : Observable<Login>{
    return this.http.post<Login>(this.baseUrl+'api/Login',login,httpOptions);
  }

  updateLogin(login:Login) : Observable<any> {
    const url = `${this.baseUrl+'api/Login'}/${login.id}`;
    return this.http.put(url, login, httpOptions);
  }

  getAllLogin() : Observable<Login[]> {
    return this.http.get<Login[]>(this.baseUrl+'api/Login');
  }

  getLoginById(id:number) : Observable<Login> {
    const url = `${this.baseUrl+'api/Login'}/${id}`;
    return this.http.get<Login>(url);
  }
}
