import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { InputValidation } from './signup-form.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form= new FormGroup({
    "username": new FormControl("", [
      Validators.required,
      Validators.minLength(5),
      InputValidation.cannotContainSpace
    ],
  InputValidation.uniqueUsername),
    "password": new FormControl("", [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  get username(){
   return this.form.get("username");
  }

  get password(){
    return this.form.get('password');
  }

  validLogin(){
    this.form.setErrors({invalidLogin: true});
  }
  
}
