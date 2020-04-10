import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyredevableComponent } from './findbyredevable.component';

describe('FindbyredevableComponent', () => {
  let component: FindbyredevableComponent;
  let fixture: ComponentFixture<FindbyredevableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbyredevableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyredevableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
