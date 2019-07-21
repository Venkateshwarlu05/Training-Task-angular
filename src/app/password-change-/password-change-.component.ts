import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PasswordValidatorComponents } from './input-validators.components';


@Component({
  selector: 'password-change',
  templateUrl: './password-change-.component.html',
  styleUrls: ['./password-change-.component.css']
})
export class PasswordChangeComponent {

  form= new FormGroup({
    "oldPassword": new FormControl("", [
      Validators.required,
    ],
    PasswordValidatorComponents.checkOldPassword),
   "newPassword": new FormControl("", [
      Validators.required,
   ]
  ),
   "confirmPassword": new FormControl("", [
     Validators.required,
    //PasswordValidatorComponents.checkPasswordEquality
    ]
  )
  });

  get oldPassword(){
    return this.form.get("oldPassword");
   }

   get newPassword(){
    return this.form.get("newPassword");
   }

   get confirmPassword(){
    return this.form.get("confirmPassword");
   }

}
