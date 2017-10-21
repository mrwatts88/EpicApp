import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P5Component } from './p5.component';

describe('P5Component', () => {
  let component: P5Component;
  let fixture: ComponentFixture<P5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
