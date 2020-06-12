import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture2Component } from './lecture2.component';

describe('InputComponent', () => {
  let component: Lecture2Component;
  let fixture: ComponentFixture<Lecture2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
