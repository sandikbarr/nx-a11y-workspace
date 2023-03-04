import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityInteractiveSupportsFocusComponent } from './accessibility-interactive-supports-focus.component';

describe('AccessibilityInteractiveSupportsFocusComponent', () => {
  let component: AccessibilityInteractiveSupportsFocusComponent;
  let fixture: ComponentFixture<AccessibilityInteractiveSupportsFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilityInteractiveSupportsFocusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      AccessibilityInteractiveSupportsFocusComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
