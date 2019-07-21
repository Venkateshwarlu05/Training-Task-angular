import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFavourite = true;

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }

  courses = ["course1", "course2"];

  viewMode = "map";

  courses1 = [
    {id: 1, name: "courses1"},
    {id: 2, name: "courses2"},
    {id: 3, name: "courses3"},
  ];

  onAdd(){
    this.courses1.push({id:4, name: "course4"});
  }

  onRemove(course){
    let index = this.courses1.indexOf(course);
    this.courses1.splice(index, 1);
  }

  onChange(course){
    course.name = "Object Oriented Programming Language"
  }

  onFavouriteChanged(eventArgs: { newValue: boolean}){
    console.log("Favourite changed", eventArgs);
  }
}
