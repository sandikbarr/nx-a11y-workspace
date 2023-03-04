import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireEventComponent } from './fire-event.component';

describe('FireEventComponent', () => {
  let component: FireEventComponent;
  let fixture: ComponentFixture<FireEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireEventComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FireEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
