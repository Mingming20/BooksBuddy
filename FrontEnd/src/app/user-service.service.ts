import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) {

  }

  getHttp(): Observable<any> {
    return this.http.get<any>(environment.bookApi);
  }

  
  postHttp(dataArray) {
    return this.http.post<any>(environment.bookApi,dataArray)
    
  }
  deleteHttp(id):Observable<any>{
    return this.http.delete<any>(environment.bookApi+"/" + id)
  }

  putHttp(id,dataArray):Observable<any>{
    return this.http.put<any>(environment.bookApi+"/"+id,dataArray)
  }
 

}
