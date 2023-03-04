import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityAltTextComponent } from './accessibility-alt-text.component';

describe('AccessibilityAltTextComponent', () => {
  let component: AccessibilityAltTextComponent;
  let fixture: ComponentFixture<AccessibilityAltTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilityAltTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessibilityAltTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
