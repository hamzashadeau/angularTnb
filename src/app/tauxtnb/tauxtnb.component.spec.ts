import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxtnbComponent } from './tauxtnb.component';

describe('TauxtnbComponent', () => {
  let component: TauxtnbComponent;
  let fixture: ComponentFixture<TauxtnbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TauxtnbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TauxtnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
