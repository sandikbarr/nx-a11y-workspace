import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByTextComponent } from './get-by-text.component';

describe('GetByTextComponent', () => {
  let component: GetByTextComponent;
  let fixture: ComponentFixture<GetByTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetByTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetByTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
