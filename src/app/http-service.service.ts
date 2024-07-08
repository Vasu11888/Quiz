import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  public getUsers(): Observable<any> {
    const url = 'https://reqres.in/api/users?page=1';
    return this.http.get<any>(url);
  }
}
