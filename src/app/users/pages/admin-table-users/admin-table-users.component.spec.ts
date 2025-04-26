import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTableUsersComponent } from './admin-table-users.component';

describe('AdminTableUsersComponent', () => {
  let component: AdminTableUsersComponent;
  let fixture: ComponentFixture<AdminTableUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTableUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTableUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
