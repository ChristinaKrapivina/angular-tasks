import {
  Directive,
  OnInit,
  HostListener,
  // ** 1st Option **
  // Renderer2,
  // ElementRef,
  // ** 2nd Option **
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appHoverChange]'
})
export class HoverChangeDirective implements OnInit{
  // ** 2nd Option **
  @HostBinding('style.fontSize') fontSize: string;
  @HostBinding('class') borderClass: string;

  constructor(
    // ** 1st Option **
    // private renderer: Renderer2,
    // private el: ElementRef
  ) { }

  ngOnInit() {
    // ** 1st Option **
    //this.renderer.addClass(this.el.nativeElement, 'border-info');
    // ** 2nd Option **
    this.fontSize = '1rem';
    this.borderClass = 'border-info';
  }

  @HostListener('mouseenter') onHover(): void {
    // ** 1st Option **
    // this.renderer.addClass(this.el.nativeElement, 'border-danger');
    // this.renderer.setStyle(this.el.nativeElement, 'font-size', '2rem');
    // ** 2nd Option **
    this.fontSize = '2rem';
    this.borderClass = 'border-danger';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    // ** 1st Option **
    // this.renderer.removeClass(this.el.nativeElement, 'border-danger');
    // this.renderer.removeStyle(this.el.nativeElement, 'font-size');
    // ** 2nd Option **
    this.fontSize = '1rem';
    this.borderClass = 'border-info';
  }
}