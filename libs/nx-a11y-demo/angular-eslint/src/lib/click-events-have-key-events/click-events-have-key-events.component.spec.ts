import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEventsHaveKeyEventsComponent } from './click-events-have-key-events.component';

describe('ClickEventsHaveKeyEventsComponent', () => {
  let component: ClickEventsHaveKeyEventsComponent;
  let fixture: ComponentFixture<ClickEventsHaveKeyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickEventsHaveKeyEventsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClickEventsHaveKeyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
