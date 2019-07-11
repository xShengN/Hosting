import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInTwoOneComponent } from './check-in-two-one.component';

describe('CheckInTwoOneComponent', () => {
  let component: CheckInTwoOneComponent;
  let fixture: ComponentFixture<CheckInTwoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInTwoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInTwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
