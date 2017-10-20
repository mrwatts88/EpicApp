import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowTheFoldComponent } from './below-the-fold.component';

describe('BelowTheFoldComponent', () => {
  let component: BelowTheFoldComponent;
  let fixture: ComponentFixture<BelowTheFoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelowTheFoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelowTheFoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
