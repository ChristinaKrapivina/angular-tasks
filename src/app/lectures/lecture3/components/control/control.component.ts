import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent {
  @Output() onStart = new EventEmitter<null>();
  
  constructor() { }

  startCount() {
    this.onStart.emit();
  }

  // stopCount() {
  // }
  
}
