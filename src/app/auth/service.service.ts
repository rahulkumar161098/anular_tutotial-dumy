import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  userRegister(data:any){
    return this.http.post<any>('http://localhost:3000/UserLogin/', data)
  }
}
