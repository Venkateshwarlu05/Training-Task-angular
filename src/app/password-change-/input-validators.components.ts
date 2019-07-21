import { AbstractControl,ValidationErrors } from "@angular/forms";

export class PasswordValidatorComponents{
    static checkOldPassword(control: AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve) => {
                if(control.value !== '1234'){
                    resolve({checkOldPassword: true});
                }
                else{
                    resolve(null);
                }
        });
    }

    static checkPasswordEquality(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        
            if(confirmPassword.value !== newPassword.value){
                return {checkPasswordEquality: true};
            }
            return null;
    }
}