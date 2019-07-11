import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewRoomsComponent } from './admin-view-rooms.component';

describe('AdminViewRoomsComponent', () => {
  let component: AdminViewRoomsComponent;
  let fixture: ComponentFixture<AdminViewRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
