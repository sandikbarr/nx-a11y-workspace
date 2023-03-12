import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPositiveTabindexComponent } from './no-positive-tabindex.component';

describe('NoPositiveTabindexComponent', () => {
  let component: NoPositiveTabindexComponent;
  let fixture: ComponentFixture<NoPositiveTabindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoPositiveTabindexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoPositiveTabindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
