import { Component, OnInit } from '@angular/core';
import { AuthService } from './services';

@Component({
  selector: 'app-lecture4',
  templateUrl: './lecture4.component.html',
  styleUrls: ['./lecture4.component.scss']
})
export class Lecture4Component implements OnInit {

  constructor( public authService: AuthService ) { }

  ngOnInit () {
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
