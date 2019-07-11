import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinthreeComponent } from './checkinthree.component';

describe('CheckinthreeComponent', () => {
  let component: CheckinthreeComponent;
  let fixture: ComponentFixture<CheckinthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
