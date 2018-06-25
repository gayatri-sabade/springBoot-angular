import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Movies17Component } from './movies17.component';

describe('Movies17Component', () => {
  let component: Movies17Component;
  let fixture: ComponentFixture<Movies17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Movies17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Movies17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
