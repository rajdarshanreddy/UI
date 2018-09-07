import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsolicitedReportsComponent } from './unsolicited-reports.component';

describe('UnsolicitedReportsComponent', () => {
  let component: UnsolicitedReportsComponent;
  let fixture: ComponentFixture<UnsolicitedReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsolicitedReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsolicitedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
