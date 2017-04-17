import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCheeseNameComponent } from './search-cheese-name.component';

describe('SearchCheeseNameComponent', () => {
  let component: SearchCheeseNameComponent;
  let fixture: ComponentFixture<SearchCheeseNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCheeseNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCheeseNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
