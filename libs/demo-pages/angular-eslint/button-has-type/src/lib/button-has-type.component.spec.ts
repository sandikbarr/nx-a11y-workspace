import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHasTypeComponent } from './button-has-type.component';

describe('ButtonHasTypeComponent', () => {
  let component: ButtonHasTypeComponent;
  let fixture: ComponentFixture<ButtonHasTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonHasTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonHasTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
