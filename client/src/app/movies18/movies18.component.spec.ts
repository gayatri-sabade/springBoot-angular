import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Movies18Component } from './movies18.component';

describe('Movies18Component', () => {
  let component: Movies18Component;
  let fixture: ComponentFixture<Movies18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Movies18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Movies18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
