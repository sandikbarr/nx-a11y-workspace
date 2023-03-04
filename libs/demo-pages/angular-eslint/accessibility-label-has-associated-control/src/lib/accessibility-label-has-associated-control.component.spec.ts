import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityLabelHasAssociatedControlComponent } from './accessibility-label-has-associated-control.component';

describe('AccessibilityLabelHasAssociatedControlComponent', () => {
  let component: AccessibilityLabelHasAssociatedControlComponent;
  let fixture: ComponentFixture<AccessibilityLabelHasAssociatedControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilityLabelHasAssociatedControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      AccessibilityLabelHasAssociatedControlComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
