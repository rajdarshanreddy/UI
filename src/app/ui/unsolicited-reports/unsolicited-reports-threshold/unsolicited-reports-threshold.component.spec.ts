import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsolicitedReportsThresholdComponent } from './unsolicited-reports-threshold.component';

describe('UnsolicitedReportsThresholdComponent', () => {
  let component: UnsolicitedReportsThresholdComponent;
  let fixture: ComponentFixture<UnsolicitedReportsThresholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsolicitedReportsThresholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsolicitedReportsThresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
