import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { checkUsernameSpace } from '../validators/check-space.validator';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent {

  topics: any[] = ["Angular", "react", "vue"];

  form = new FormGroup({
    username: new FormControl('', [Validators.required, checkUsernameSpace.checkSpaceinText], checkUsernameSpace.checkExisting),
    email: new FormControl('mostafa@yahoo.com', [Validators.required, checkUsernameSpace.checkSpaceinText]),
    phone: new FormControl('01011319559'),
    selectForm: new FormControl(),
    timePrefernce: new FormControl(),
    subscribe: new FormControl()

  });

  
  onSubmit() {
    return this.form.setErrors({invalidLogin: true});
  }



  constructor() { 
    
  }
  log(formcontrol) {

    console.log(formcontrol);

  }
}






/*

  get methusername() {
    return this.form.get('username');
  }
*/