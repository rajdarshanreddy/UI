import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsolicitedReportsTopPatientsComponent } from './unsolicited-reports-top-patients.component';

describe('UnsolicitedReportsTopPatientsComponent', () => {
  let component: UnsolicitedReportsTopPatientsComponent;
  let fixture: ComponentFixture<UnsolicitedReportsTopPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsolicitedReportsTopPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsolicitedReportsTopPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
