import { AbstractControl, ValidationErrors } from "@angular/forms";

export class InputValidation{
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {

        if((control.value as string).indexOf(' ') >=0){
            return {cannotContainSpace: true};
        }

        return null;

    }

    //creating a static method for unique username with asynchronous operation.
    static uniqueUsername(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'sairamkumar'){
                    resolve({uniqueUsername: true});
                }
                else{
                    resolve(null);
                }
            }, 2000);
        });
    }
}