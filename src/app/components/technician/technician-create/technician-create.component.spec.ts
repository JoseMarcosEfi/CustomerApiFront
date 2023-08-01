import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianCreateComponent } from './technician-create.component';

describe('TechnicianCreateComponent', () => {
  let component: TechnicianCreateComponent;
  let fixture: ComponentFixture<TechnicianCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicianCreateComponent]
    });
    fixture = TestBed.createComponent(TechnicianCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
