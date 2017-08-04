import {Directive, HostListener, HostBinding} from '@angular/core';

/*It adds a class to the element onclick and remove it if you click again*/
@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  // constructor(private elRef: ElementRef, private renderer: Renderer2) {
  // }

  @HostListener('click')
  toggleOpen() {
    this.isOpen = !this.isOpen;
    // if (this.elRef.nativeElement.classList.contains('open')) {
    //   this.renderer.removeClass(this.elRef.nativeElement, 'open');
    // } else {
    //   this.renderer.addClass(this.elRef.nativeElement, 'open');
    // }
  }
}
