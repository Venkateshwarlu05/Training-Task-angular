import { Component, Input } from '@angular/core';

@Component({
  selector: 'like-assignment',
  templateUrl: './like-assignment.component.html',
  styleUrls: ['./like-assignment.component.css']
})
export class LikeAssignmentComponent {

  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  onClick(){
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
