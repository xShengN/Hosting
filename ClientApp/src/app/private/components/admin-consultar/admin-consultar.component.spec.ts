import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsultarComponent } from './admin-consultar.component';

describe('AdminConsultarComponent', () => {
  let component: AdminConsultarComponent;
  let fixture: ComponentFixture<AdminConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
