import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() { }

  rateDown(book: Book): Book {
    return null;
  }

  rateUp(book: Book): Book {
    return null;
  }
}
