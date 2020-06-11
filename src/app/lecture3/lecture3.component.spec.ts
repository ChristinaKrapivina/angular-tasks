import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture3Component } from './lecture3.component';

describe('Lecture3Component', () => {
  let component: Lecture3Component;
  let fixture: ComponentFixture<Lecture3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lecture3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
