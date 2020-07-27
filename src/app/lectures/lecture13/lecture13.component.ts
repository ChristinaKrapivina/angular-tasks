import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService, AuthService } from './services';
import { Post, FirebaseLoginResponse } from './models';

@Component({
  selector: 'app-lecture13',
  templateUrl: './lecture13.component.html',
  styleUrls: ['./lecture13.component.scss']
})
export class Lecture13Component implements OnInit {
  posts: Post[] = [];
  token: string;
  isSubmitting = false;
  isLoggingIn = false;
  isLoggedIn = false;
  hasError = false;
  errorMessage: string;

  constructor(
    private postService: PostService,
    private authService: AuthService ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  onCreatePost(form: NgForm) {
    this.isSubmitting = true;
    this.hasError = false;
    const postDate = new Date();
    const post: Post = {...form.value, date: postDate};
    this.postService.create(post, this.token)
      .subscribe( () => {
        form.reset();
        this.getPosts();
        this.isSubmitting = false;
      }, error => {
        this.hasError = true;
        this.errorMessage = error.error.error;
        this.getPosts();
        this.isSubmitting = false;
      })
  }
  onDeleteAll() {
    this.postService.deleteAll(this.token)
      .subscribe( () => {
        this.getPosts();
      })
  }
  onLogin() {
    this.hasError = false;
    this.isLoggingIn = true;
    this.authService.login()
      .subscribe((response: FirebaseLoginResponse) => {
        this.token = response.idToken;
        this.isLoggingIn = false;
        this.isLoggedIn = true;
      })
  }

  private getPosts() {
    this.isSubmitting = true;
    this.postService.getAll()
      .subscribe( postsReceived => {
        this.posts = postsReceived;
        this.isSubmitting = false;
      })
  }
}
