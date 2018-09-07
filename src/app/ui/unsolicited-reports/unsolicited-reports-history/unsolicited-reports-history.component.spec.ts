import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsolicitedReportsHistoryComponent } from './unsolicited-reports-history.component';

describe('UnsolicitedReportsHistoryComponent', () => {
  let component: UnsolicitedReportsHistoryComponent;
  let fixture: ComponentFixture<UnsolicitedReportsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsolicitedReportsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsolicitedReportsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
