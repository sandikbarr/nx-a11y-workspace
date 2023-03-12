import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAutofocusComponent } from './no-autofocus.component';

describe('NoAutofocusComponent', () => {
  let component: NoAutofocusComponent;
  let fixture: ComponentFixture<NoAutofocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoAutofocusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoAutofocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
