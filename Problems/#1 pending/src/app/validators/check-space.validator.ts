import {AbstractControl, ValidationErrors} from '@angular/forms';
import { DbService } from '../dbService/db.service';

export class checkUsernameSpace {
    static checkSpaceinText(control: AbstractControl ): ValidationErrors | null {
        if((<string>control.value).indexOf(' ') != -1) {
            return {checkSpaceinText: true};
        }
        return null
    }

    static checkExisting(control: AbstractControl ): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject)=> {
            setTimeout(()=>{
                if ((<string>control.value) !== new DbService().getUserFromDB()) {
                    resolve({checkExisting: true});
                } else {
                    reject(null);
                }
            }, 7000);
        })

    }

}