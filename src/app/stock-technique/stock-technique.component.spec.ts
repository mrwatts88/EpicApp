import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTechniqueComponent } from './stock-technique.component';

describe('StockTechniqueComponent', () => {
  let component: StockTechniqueComponent;
  let fixture: ComponentFixture<StockTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
