import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutTwoComponent } from './check-out-two.component';

describe('CheckOutTwoComponent', () => {
  let component: CheckOutTwoComponent;
  let fixture: ComponentFixture<CheckOutTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
