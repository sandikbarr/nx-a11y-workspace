import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'button[a11yPopupMenu]',
  standalone: true,
})
export class PopupMenuButtonDirective {
  @Input() isMenuOpen?: boolean;
  @Input() menuId!: string;

  @HostBinding('attr.id')
  get buttonId(): string {
    return this.menuId + '-button';
  }

  @HostBinding('attr.aria-controls')
  get ariaControls(): string | undefined {
    return this.isMenuOpen ? this.menuId : undefined;
  }

  @HostBinding('attr.aria-haspopup')
  hasPopup = true;

  constructor(private readonly el: ElementRef) {}

  focus() {
    this.el.nativeElement.focus();
  }

  click() {
    this.el.nativeElement.click();
  }
}
