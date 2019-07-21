import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddRemoveFormComponent } from './course-add-remove-form.component';

describe('CourseAddRemoveFormComponent', () => {
  let component: CourseAddRemoveFormComponent;
  let fixture: ComponentFixture<CourseAddRemoveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAddRemoveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddRemoveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
