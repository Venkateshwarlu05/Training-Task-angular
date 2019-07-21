import { Component } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  likesCount=0;
  isSelected: boolean;

  onClick(){
    this.isSelected = !this.isSelected;
    if(this.isSelected){
      this.likesCount = this.likesCount+1;
    }
    else if(!this.isSelected){
      this.likesCount = this.likesCount-1;
    }
  }
}
