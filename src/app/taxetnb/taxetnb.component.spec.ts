import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxetnbComponent } from './taxetnb.component';

describe('TaxetnbComponent', () => {
  let component: TaxetnbComponent;
  let fixture: ComponentFixture<TaxetnbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxetnbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxetnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
