import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeAssignmentComponent } from './like-assignment.component';

describe('LikeAssignmentComponent', () => {
  let component: LikeAssignmentComponent;
  let fixture: ComponentFixture<LikeAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
