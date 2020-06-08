import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  userName: string = 'Christina';
  show: boolean = true;
  clicks: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  clearInput() {
    this.userName = '';
  }
  showParagraph() {
    this.show = !this.show;
  }
  addClick() {
    this.clicks.push(this.clicks.length + 1);
  }
}
