import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './bootstrap-panel-assignment.component.html',
  styleUrls: ['./bootstrap-panel-assignment.component.css']
})
export class BootstrapPanelAssignmentComponent {

@Input('title') title: string;
isExpanded: boolean;

  toggle()
  {
   this.isExpanded = !this.isExpanded;
  }
}
