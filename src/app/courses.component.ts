import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: "courses", //if i want to reference an element oike <courses>, i will refer like this "courses".
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        `
})
export class CoursesComponent {
    title = "List of courses"
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}