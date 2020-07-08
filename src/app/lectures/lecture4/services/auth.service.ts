import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
     isLoggedIn = false;

     login(): void {
          this.isLoggedIn = true;
     }

     logout(): void {
          this.isLoggedIn = false;
     }

     checkLogIn(): boolean {
          return this.isLoggedIn;
     }
}