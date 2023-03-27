import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAnnouncerComponent } from './live-announcer.component';

describe('LiveAnnouncerComponent', () => {
  let component: LiveAnnouncerComponent;
  let fixture: ComponentFixture<LiveAnnouncerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveAnnouncerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveAnnouncerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
