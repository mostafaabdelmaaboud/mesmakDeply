import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { checkUsernameSpace } from '../validators/check-space.validator';
import { ReturnStatement } from '@angular/compiler';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  posts: any;
  
  title = "mostafa";

  constructor(private service: PostService) {}
  ngOnInit() {
    // subscribe is combination of Synch Callback and Observable Streams
   this.service.get().subscribe((response) => {this.posts = response; }, (error: any) => alert('unExpected Errors'));
  }
  createPost(getValue: HTMLInputElement) {
    const post = {title: getValue};
    this.service.post(post).subscribe((response) => {
      this.posts.unshift(post);
    });

  }
  updatePost(post) {
    this.service.update(post).subscribe((response) => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1, response);
    });
  }
  deletePost(post) {
    this.service.delete(post).subscribe((response) => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error: Response) => {
      if (error.status === 404) {
        alert('this post is already deleted');
      } else {
        alert('unExpected Errors');
      }
    });
  }

}





































/*
const observable = new Observable(subscriber => {

});
  const observable = new Observable(subscriber => {
    subscriber.next(10);
    subscriber.next(20);
    subscriber.next(30);
    setTimeout(() => {
      subscriber.next(40);
      subscriber.complete();
    }, 1000);
  });

  console.log('just before subscribe');
  observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  });
  console.log('just after subscribe');
  */

/*
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
  log(formcontrol) {
    console.log(formcontrol);
  }
*/
