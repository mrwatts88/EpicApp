import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoaComponent } from './whoa.component';

describe('WhoaComponent', () => {
  let component: WhoaComponent;
  let fixture: ComponentFixture<WhoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
