import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianUpdateComponent } from './technician-update.component';

describe('TechnicianUpdateComponent', () => {
  let component: TechnicianUpdateComponent;
  let fixture: ComponentFixture<TechnicianUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicianUpdateComponent]
    });
    fixture = TestBed.createComponent(TechnicianUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
