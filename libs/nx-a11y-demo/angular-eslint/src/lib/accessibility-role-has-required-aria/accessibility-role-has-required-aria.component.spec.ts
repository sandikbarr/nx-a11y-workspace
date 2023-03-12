import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityRoleHasRequiredAriaComponent } from './accessibility-role-has-required-aria.component';

describe('AccessibilityRoleHasRequiredAriaComponent', () => {
  let component: AccessibilityRoleHasRequiredAriaComponent;
  let fixture: ComponentFixture<AccessibilityRoleHasRequiredAriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilityRoleHasRequiredAriaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      AccessibilityRoleHasRequiredAriaComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
