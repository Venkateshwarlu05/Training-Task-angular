import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent{

  @Input() isSelected: boolean;
  @Output() change = new EventEmitter();

  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected});
  }
}
