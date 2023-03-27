import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfTheBoxComponent } from './out-of-the-box.component';

describe('OutOfTheBoxComponent', () => {
  let component: OutOfTheBoxComponent;
  let fixture: ComponentFixture<OutOfTheBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutOfTheBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OutOfTheBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
