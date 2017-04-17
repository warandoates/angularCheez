import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCheeseBtnComponent } from './get-all-cheese-btn.component';

describe('GetAllCheeseBtnComponent', () => {
  let component: GetAllCheeseBtnComponent;
  let fixture: ComponentFixture<GetAllCheeseBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCheeseBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCheeseBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
