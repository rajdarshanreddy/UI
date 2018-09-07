import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsNewComponent } from './alerts-new.component';

describe('AlertsNewComponent', () => {
  let component: AlertsNewComponent;
  let fixture: ComponentFixture<AlertsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
