import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDistractingElementsComponent } from './no-distracting-elements.component';

describe('NoDistractingElementsComponent', () => {
  let component: NoDistractingElementsComponent;
  let fixture: ComponentFixture<NoDistractingElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoDistractingElementsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoDistractingElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
