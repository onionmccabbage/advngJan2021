import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseAsyncComponent } from './use-async.component';

describe('UseAsyncComponent', () => {
  let component: UseAsyncComponent;
  let fixture: ComponentFixture<UseAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
