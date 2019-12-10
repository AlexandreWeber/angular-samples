import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
    public el: ElementRef;

    constructor(el: ElementRef) {
      this.el = el;
    }

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }

    private highlight(color: string) {
      this.el.nativeElement.style.color = color;
      this.el.nativeElement.style.text = 'a';
    }
}
