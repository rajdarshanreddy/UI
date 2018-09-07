import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftmenueComponent } from './leftmenue.component';

describe('LeftmenueComponent', () => {
  let component: LeftmenueComponent;
  let fixture: ComponentFixture<LeftmenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftmenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftmenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
