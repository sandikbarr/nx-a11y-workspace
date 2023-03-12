import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityTableScopeComponent } from './accessibility-table-scope.component';

describe('AccessibilityTableScopeComponent', () => {
  let component: AccessibilityTableScopeComponent;
  let fixture: ComponentFixture<AccessibilityTableScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibilityTableScopeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccessibilityTableScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
