import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAnalyzerComponent } from './stock-analyzer.component';

describe('StockAnalyzerComponent', () => {
  let component: StockAnalyzerComponent;
  let fixture: ComponentFixture<StockAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
