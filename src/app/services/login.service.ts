import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private API_USERS= "http://localhost:3000/login"
  private API_USERS2= "http://localhost:3000/users"

  postLogin(usuario:JSON):Observable<any>{
    return this.http.post(this.API_USERS, usuario)
  }

  postRegistro(usuario:any):Observable<any>{
    return this.http.post(this.API_USERS2, usuario)
  }

  getUsers():Observable<any>{
    return this.http.get(this.API_USERS2)
  }
  getDatos(id:any):Observable<any>{
    return this.http.get(`${this.API_USERS2}/${id}`)
  }
  postUsers(productos:JSON):Observable<any>{
    return this.http.post(this.API_USERS2, productos)
  }

  deletUserID(id:any):Observable<any>{
    return this.http.delete(`${this.API_USERS2}/${id}`)
      }

}

