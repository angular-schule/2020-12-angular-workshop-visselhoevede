import { Injectable } from '@angular/core';
import { Book } from './book';

const minValue = 1;
const maxValue = 5;

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {


  rateDown(book: Book): Book {
    const rating = Math.max(minValue, book.rating - 1);
    return {
      ...book,
      rating,
    };
  }

  rateUp(book: Book): Book {
    const rating = Math.min(maxValue, book.rating + 1);
    return {
      ...book,
      rating
    };
  }

  disableDownButton(book: Book) {
    return book.rating <= minValue;
  }

  disableUpButton(book: Book) {
    return book.rating >= maxValue;
  }
}
