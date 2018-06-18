import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseGridComponent } from './admin-course-grid.component';

describe('AdminCourseGridComponent', () => {
  let component: AdminCourseGridComponent;
  let fixture: ComponentFixture<AdminCourseGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
