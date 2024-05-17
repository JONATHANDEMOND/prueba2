import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RevisionService {

  constructor(private http:HttpClient) { }
private API_REVISION ="http://localhost:3000/revision"
getRevicion(): Observable<any> {
  return this.http.get(this.API_REVISION)
}


getDatos(id:any):Observable<any>{
  return this.http.get(`${this.API_REVISION}/${id}`)
}

deleteRevcionID(id:any):Observable<any>{
return this.http.delete(`${this.API_REVISION}/${id}`)
}
postRevision(productos:JSON):Observable<any>{
  return this.http.post(this.API_REVISION, productos)
}


}
