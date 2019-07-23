import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursereportComponent } from './coursereport.component';

describe('CoursereportComponent', () => {
  let component: CoursereportComponent;
  let fixture: ComponentFixture<CoursereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
