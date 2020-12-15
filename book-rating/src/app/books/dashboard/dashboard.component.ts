import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { selectBooks, selectBooksLoading, selectBookViaIsbn } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books$ = this.store.pipe(select(selectBooks));
  loading$ = this.store.pipe(select(selectBooksLoading));

  // just an example
  specialBook$ = this.store.pipe(select(selectBookViaIsbn, { isbn: '42'}));

  constructor(private store: Store) {
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
