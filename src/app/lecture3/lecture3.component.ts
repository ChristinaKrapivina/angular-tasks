import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lecture3',
  templateUrl: './lecture3.component.html',
  styleUrls: ['./lecture3.component.scss']
})
export class Lecture3Component implements OnInit {
  evenNumbers:number[] = [];
  oddNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  numberAdded(number: number) {
    if(number % 2 === 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }

}
