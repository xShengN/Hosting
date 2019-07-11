import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInTwoComponent } from './check-in-two.component';

describe('CheckInTwoComponent', () => {
  let component: CheckInTwoComponent;
  let fixture: ComponentFixture<CheckInTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
