import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsolicitedReportsValidPatientsComponent } from './unsolicited-reports-valid-patients.component';

describe('UnsolicitedReportsValidPatientsComponent', () => {
  let component: UnsolicitedReportsValidPatientsComponent;
  let fixture: ComponentFixture<UnsolicitedReportsValidPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsolicitedReportsValidPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsolicitedReportsValidPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
