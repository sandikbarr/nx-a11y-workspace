import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseEventsHaveKeyEventsComponent } from './mouse-events-have-key-events.component';

describe('MouseEventsHaveKeyEventsComponent', () => {
  let component: MouseEventsHaveKeyEventsComponent;
  let fixture: ComponentFixture<MouseEventsHaveKeyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseEventsHaveKeyEventsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MouseEventsHaveKeyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
