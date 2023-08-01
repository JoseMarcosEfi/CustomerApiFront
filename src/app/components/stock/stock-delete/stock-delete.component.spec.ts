import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDeleteComponent } from './stock-delete.component';

describe('StockDeleteComponent', () => {
  let component: StockDeleteComponent;
  let fixture: ComponentFixture<StockDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockDeleteComponent]
    });
    fixture = TestBed.createComponent(StockDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
