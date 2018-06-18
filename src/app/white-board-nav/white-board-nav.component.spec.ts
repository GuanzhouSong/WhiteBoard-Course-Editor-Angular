import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteBoardNavComponent } from './white-board-nav.component';

describe('WhiteBoardNavComponent', () => {
  let component: WhiteBoardNavComponent;
  let fixture: ComponentFixture<WhiteBoardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiteBoardNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteBoardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
