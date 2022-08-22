import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from '../../Member';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl: string = "https://registry-api.herokuapp.com/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }

  addUser(user: Member): Observable<any> {
    return this.http.post<Member>(this.apiUrl, user, httpOptions);
  }
}