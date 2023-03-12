import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByRoleComponent } from './get-by-role.component';

describe('GetByRoleComponent', () => {
  let component: GetByRoleComponent;
  let fixture: ComponentFixture<GetByRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetByRoleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetByRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
