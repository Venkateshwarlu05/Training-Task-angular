import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'course-add-remove-form',
  templateUrl: './course-add-remove-form.component.html',
  styleUrls: ['./course-add-remove-form.component.css']
})
export class CourseAddRemoveFormComponent {

form = new FormGroup({
  topics: new FormArray([])
}); 

get topics(){
  return this.form.get('topics') as FormArray;
}
addTopic(topic: HTMLInputElement){
  (this.topics.push(new FormControl(topic.value)));
  topic.value = '';
}

removeTopic(topic: FormControl){
  let index = this.topics.controls.indexOf(topic);
  this.topics.removeAt(index);
}
}
