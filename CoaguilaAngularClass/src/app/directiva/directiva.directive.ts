import { Directive, ElementRef, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appDirectiva]'
})
export class DirectivaDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  publicMouseEnter(){
    this.element.nativeElement.style.backgroundColor = 'green';
  }
  @HostListener('mouseleave')
  publicMouseLeave(){
    this.element.nativeElement.style.backgroundColor = 'white';
  }
}
