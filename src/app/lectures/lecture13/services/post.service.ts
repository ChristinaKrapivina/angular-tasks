import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsURL = 'https://posts-98983.firebaseio.com/posts.json';

  constructor( private http: HttpClient ) {}

  create(post: Post, token: string): Observable<Object> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('auth', token);

    return this.http.post(this.postsURL, post, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: searchParams
    })
  }
  
  deleteAll(token: string): Observable<Object> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('auth', token);

    return this.http.delete(this.postsURL, {
      params: searchParams
    });
  }

  getAll(): Observable<Post[]> {
    return this.http.get(this.postsURL)
    .pipe(
      map(response => {
        const arr = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            arr.push({ ...response[key], id: key })
          }
        }
        return arr;
      })
    )
  }
}