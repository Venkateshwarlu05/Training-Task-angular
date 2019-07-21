import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { MovieNameComponent } from './movie-name/movie-name.component';
import { TextCasePipe } from './text-case.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { LikeAssignmentComponent } from './like-assignment/like-assignment.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BootstrapPanelAssignmentComponent } from './bootstrap-panel-assignment/bootstrap-panel-assignment.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CourseAddRemoveFormComponent } from './course-add-remove-form/course-add-remove-form.component';
import { PostsComponent } from './posts/posts.component';
import { PasswordChangeComponent } from './password-change-/password-change-.component';
import { PasswordValidatorComponents } from './password-change-/input-validators.components';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    FavouriteComponent,
    MovieNameComponent,
    TextCasePipe,
    BootstrapPanelComponent,
    LikeComponent,
    LikeAssignmentComponent,
    InputFormatDirective,
    ContactFormComponent,
    BootstrapPanelAssignmentComponent,
    NewCourseFormComponent,
    CourseAddRemoveFormComponent,
    PostsComponent,
    PasswordChangeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
