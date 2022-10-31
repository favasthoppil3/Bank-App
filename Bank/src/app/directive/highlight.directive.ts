import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ab:ElementRef) {
    ab.nativeElement.style.backgroundColor=""
    ab.nativeElement.style.padding="5px"
   }
}
