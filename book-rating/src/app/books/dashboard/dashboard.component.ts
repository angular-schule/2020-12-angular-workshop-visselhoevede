import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  books: Book[] = [];

  constructor(private br: BookRatingService, private bs: BookStoreService) {
  }

  doRateDown(book: Book): void {
    // const ratedBook = this.br.rateDown(book);
    // this.updateBook(ratedBook);
  }

  doRateUp(book: Book): void {
    // const ratedBook = this.br.rateUp(book);
    // // const ratedBook = {
    // //   ...book,
    // //   rating: Math.min(5, book.rating + 1)
    // // }
    // this.updateBook(ratedBook);
  }

  updateBook(ratedBook: Book): void {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating);
  }

  disableDownButton(book: Book) {
    // return this.br.disableDownButton(book);
  }

  disableUpButton(book: Book)  {
    // return this.br.disableUpButton(book);
  }

  addBook(newBook: Book) {
    // this.books = [...this.books, newBook];
  }
}
