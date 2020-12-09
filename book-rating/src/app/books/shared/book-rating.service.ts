import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  private readonly minValue = 1;
  private readonly maxValue = 5;

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
