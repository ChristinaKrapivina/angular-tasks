import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(
    public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.setMessage();
  }

  onLogin() {
    this.authService.login();
    if (this.authService.redirectUrl) {
      this.router.navigate([this.authService.redirectUrl]);
    }
    this.setMessage();
  }

  onLogout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage() {
    this.message = this.authService.isLoggedIn ? 'Now you can view purchase list' : 'You need to login to see your purchase list.'
  }
}
