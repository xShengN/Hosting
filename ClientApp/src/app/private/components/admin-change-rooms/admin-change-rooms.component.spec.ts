import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChangeRoomsComponent } from './admin-change-rooms.component';

describe('AdminChangeRoomsComponent', () => {
  let component: AdminChangeRoomsComponent;
  let fixture: ComponentFixture<AdminChangeRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChangeRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChangeRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
