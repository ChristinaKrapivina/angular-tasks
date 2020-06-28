import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCreatorComponent } from './purchase-creator.component';

describe('PurchaseCreatorComponent', () => {
  let component: PurchaseCreatorComponent;
  let fixture: ComponentFixture<PurchaseCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
