import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreregComponent } from './prereg.component';

describe('PreregComponent', () => {
  let component: PreregComponent;
  let fixture: ComponentFixture<PreregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
