import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionMenuItemComponent } from './expansion-menu-item.component';
import { FocusKeyManager } from '@angular/cdk/a11y';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a11y-expansion-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class.expanded]="isExpanded">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host > div {
        display: none;
        background-color: white;
        padding: 0.5rem;
      }
      :host > div.expanded {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionMenuComponent implements AfterContentInit {
  @ContentChildren(ExpansionMenuItemComponent)
  listItems!: QueryList<ExpansionMenuItemComponent>;

  @HostBinding('role')
  role = 'menu';

  @HostBinding('tabindex')
  get tabIndex(): number {
    return this.expanded ? 0 : -1;
  }

  @HostBinding('attr.aria-labelledby')
  get buttonId(): string {
    return this.id + '-button';
  }

  @HostBinding('attr.id')
  @Input()
  id!: string;

  isExpanded = false;
  @Input()
  set expanded(expanded: boolean) {
    this.isExpanded = expanded;
    if (expanded) {
      this.element.nativeElement.focus();
    }
  }
  get expanded(): boolean {
    return this.isExpanded;
  }

  constructor(private element: ElementRef) {}

  private keyManager?: FocusKeyManager<ExpansionMenuItemComponent>;

  ngAfterContentInit() {
    this.keyManager = new FocusKeyManager(this.listItems).withWrap();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    this.keyManager?.onKeydown(event);
  }
}
