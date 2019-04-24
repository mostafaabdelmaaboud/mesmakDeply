export class Hero {

    constructor(
      public inusername: any,
      public inemail: any,
      public inphone: any,
      public inselectForm: any,
      public intimePrefernce: any,
      public insubscribe: any
    ) {  }
  
  }
  /*
  <div class="container">
  <h1>Bootcamp Enrollment Form</h1>

  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" ngModel #username="ngModel" (change)="log(username)" required name="username">
    </div>
    
    <div class="alert alert-danger" *ngIf="username.touched && username.invalid">
      Please Enter Your userName
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="email" pattern="mostafa@ahmed.com" class="form-control" minlength="10" ngModel #emails="ngModel" (change)="log(emails)" required name="email">
    </div>

    <div class="form-group">
      <label>phone</label>
      <input type="tel" class="form-control" ngModel #phone="ngModel" required name="phone">
    </div>   
    <div class="form-group">
      <select class="custom-select form-control"  ngModel  name="selectForm">
        <option selected>I am interested in</option>
        <option *ngFor="let topic of topics">{{topic}}</option>
      </select>
    </div>
    <div class="mb-3">
      <label>Time Prefernce</label>
      <div class="form-check">
        <input  type="radio"  class="form-check-input" name="timePrefernce" checked value="Morning" ngModel >
        <label class="form-check-label">Morning</label>
      </div>
      <div class="form-check">
        <input type="radio" class="form-check-input" name="timePrefernce" value="Evening" ngModel >
        <label class="form-check-label">Evening</label>
      </div>
    </div>
    <div class="form-check mb-3">
      <input type="checkbox" class="form-check-input" name="subscribe" ngModel>
      <label for="" class="form-check-label">
        send me promotional offers
      </label>
    </div>
    
    <button class="btn btn-primary" type="submit">Submit</button>       
  </form>
</div>
*/