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
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.setMessage();
  }

  onLogin() {
    this.authService.login();
    this.router.navigate([this.authService.redirectUrl]);
    this.setMessage();
  }

  onLogout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage() {
    this.message = this.authService.isLoggedIn ? 'We are glad to see you!' : 'You need to login to see your purchase list.'
  }
}
