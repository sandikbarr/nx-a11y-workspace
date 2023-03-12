import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByAltTextComponent } from './get-by-alt-text.component';

describe('GetByAltTextComponent', () => {
  let component: GetByAltTextComponent;
  let fixture: ComponentFixture<GetByAltTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetByAltTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetByAltTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
