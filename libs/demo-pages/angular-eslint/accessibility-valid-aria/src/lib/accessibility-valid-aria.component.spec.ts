import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityValidAriaComponent } from './accessibility-valid-aria.component';

describe('AccessibilityValidAriaComponent', () => {
  let component: AccessibilityValidAriaComponent;
  let fixture: ComponentFixture<AccessibilityValidAriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilityValidAriaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessibilityValidAriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
