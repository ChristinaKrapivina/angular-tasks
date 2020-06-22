import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  @Output() onStart = new EventEmitter<number>();
  number: number = 0;
  intervalID: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  startCount() {
    this.intervalID = window.setInterval(() => { 
      this.onStart.emit(
        this.number += 1
      )
    }, 2000);
  }

  stopCount() {
    clearInterval(this.intervalID);
  }
  
}
