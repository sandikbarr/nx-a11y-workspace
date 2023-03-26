import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKeyManagerComponent } from './list-key-manager.component';

describe('ListKeyManagerComponent', () => {
  let component: ListKeyManagerComponent;
  let fixture: ComponentFixture<ListKeyManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListKeyManagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListKeyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
