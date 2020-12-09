import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  readonly minValue = 1;
  readonly maxValue = 5;

  rateDown(book: Book): Book {
    const rating = Math.max(this.minValue, book.rating - 1);
    return {
      ...book,
      rating,
    };
  }

  rateUp(book: Book): Book {
    const rating = Math.min(this.maxValue, book.rating + 1);
    return {
      ...book,
      rating
    };
  }
}
