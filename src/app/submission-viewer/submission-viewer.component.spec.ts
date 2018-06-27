import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionViewerComponent } from './submission-viewer.component';

describe('SubmissionViewerComponent', () => {
  let component: SubmissionViewerComponent;
  let fixture: ComponentFixture<SubmissionViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
