import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecordComponent } from './home-record.component';

describe('HomeRecordComponent', () => {
  let component: HomeRecordComponent;
  let fixture: ComponentFixture<HomeRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
