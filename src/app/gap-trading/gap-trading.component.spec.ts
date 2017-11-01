import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GapTradingComponent } from './gap-trading.component';

describe('GapTradingComponent', () => {
  let component: GapTradingComponent;
  let fixture: ComponentFixture<GapTradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GapTradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GapTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
