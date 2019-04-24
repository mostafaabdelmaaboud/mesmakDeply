import {AbstractControl, ValidationErrors} from '@angular/forms';
import { DbService } from '../dbService/db.service';

export class checkUsernameSpace {
    static checkSpaceinText(control: AbstractControl ): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') != -1) {
            return {checkSpaceinText: true};
        }
        return null;
    }

    static checkExisting(control: AbstractControl ): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((control.value as string) !== new DbService().getUserFromDB()) {
                    resolve({checkExisting: true});
                } else {
                    resolve(null);
                }
            }, 7000);
        });

    }

}
