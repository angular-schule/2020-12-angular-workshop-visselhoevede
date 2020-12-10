import { Injectable } from '@angular/core';
import { Book } from './book';

export const bookRatingMinValue = 1;
export const bookRatingMaxValue = 5;

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {


  rateDown(book: Book): Book {
    const rating = Math.max(bookRatingMinValue, book.rating - 1);
    return {
      ...book,
      rating,
    };
  }

  rateUp(book: Book): Book {
    const rating = Math.min(bookRatingMaxValue, book.rating + 1);
    return {
      ...book,
      rating
    };
  }

  disableDownButton(book: Book) {
    return book.rating <= bookRatingMinValue;
  }

  disableUpButton(book: Book) {
    return book.rating >= bookRatingMaxValue;
  }
}
