import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByPlaceholderTextComponent } from './get-by-placeholder-text.component';

describe('GetByPlaceholderTextComponent', () => {
  let component: GetByPlaceholderTextComponent;
  let fixture: ComponentFixture<GetByPlaceholderTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetByPlaceholderTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetByPlaceholderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
