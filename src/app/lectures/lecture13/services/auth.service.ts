import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private http: HttpClient ) {}

  login(): Observable<Object> {
    const apiKey = 'AIzaSyB3zqs9w577zwMoQSiEmOnLDmbZJYut-GU';
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    {
      email: 'admin@email.com',
      password: '123456',
      returnSecureToken: true
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}