import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) { }
  get() {
    return this.http.get(this.url);
  }
  post(getValue) {
    return this.http.post(this.url, JSON.stringify(getValue));
  }
  update(getValue) {
    return this.http.patch(this.url + '/' + getValue.id, {title: 'Updated Post - Title'});
  }
  delete(getValue) {
    return this.http.delete(this.url + '/' + getValue.id);
  }
}
