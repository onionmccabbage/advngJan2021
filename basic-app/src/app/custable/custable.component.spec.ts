import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustableComponent } from './custable.component';

describe('CustableComponent', () => {
  let component: CustableComponent;
  let fixture: ComponentFixture<CustableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
