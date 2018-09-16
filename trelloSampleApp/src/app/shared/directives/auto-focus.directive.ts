import { Directive, AfterViewInit, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewChecked {

  constructor(private el: ElementRef) { }
 ngAfterViewChecked() {
    this.el.nativeElement.focus();
  }
}
