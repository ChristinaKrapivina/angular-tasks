import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './lecture2.component.html',
  styleUrls: ['./lecture2.component.scss']
})
export class Lecture2Component implements OnInit {
  userName: string = 'Christina';
  show: boolean = false;
  clicks: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  clearInput() {
    this.userName = '';
  }
  showParagraph() {
    this.show = !this.show;
    this.clicks.push(this.clicks.length + 1);
  }
}
