import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAll() {
      return ['C+', 'PHP', 'MYSQL', 'HTML', 'CSS', 'ANGULAR', 'Node'];
  }

}
