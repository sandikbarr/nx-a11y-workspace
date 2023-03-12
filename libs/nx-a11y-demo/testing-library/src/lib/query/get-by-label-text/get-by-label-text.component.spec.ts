import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByLabelTextComponent } from './get-by-label-text.component';

describe('GetByLabelTextComponent', () => {
  let component: GetByLabelTextComponent;
  let fixture: ComponentFixture<GetByLabelTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetByLabelTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetByLabelTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
