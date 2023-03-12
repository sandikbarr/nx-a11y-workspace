import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityElementsContentComponent } from './accessibility-elements-content.component';

describe('AccessibilityElementsContentComponent', () => {
  let component: AccessibilityElementsContentComponent;
  let fixture: ComponentFixture<AccessibilityElementsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilityElementsContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessibilityElementsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
