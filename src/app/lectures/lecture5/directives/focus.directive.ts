import {
  Directive,
  OnInit,
  // ** 1st Option **
  //Renderer2,
  // ** 2nd Option **
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit{

  constructor(
    // ** 1st Option **
    //private renderer: Renderer2,
    // ** 2nd Option **
    private el: ElementRef
  ) { }

  ngOnInit() {
    // ** 1st Option **
    //this.renderer.selectRootElement('#focusInput').focus();
    // ** 2nd Option **
    this.el.nativeElement.focus();
  }
}