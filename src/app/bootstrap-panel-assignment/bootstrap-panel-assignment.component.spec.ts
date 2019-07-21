import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapPanelAssignmentComponent } from './bootstrap-panel-assignment.component';

describe('BootstrapPanelAssignmentComponent', () => {
  let component: BootstrapPanelAssignmentComponent;
  let fixture: ComponentFixture<BootstrapPanelAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapPanelAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapPanelAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
