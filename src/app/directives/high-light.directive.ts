import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
  standalone: true
})
export class HighLightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
