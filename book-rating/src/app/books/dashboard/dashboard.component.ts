import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private br: BookRatingService) {

  }

  ngOnInit(): void {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Tolles Buch',
        rating: 5
      },
      {
        isbn: '111',
        title: 'AngularJs',
        description: 'Altes Buch',
        rating: 3
      },
      {
        isbn: '222',
        title: 'React',
        description: 'Olles Buch',
        rating: 1
      },
    ];
  }

  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    this.updateBook(ratedBook);
  }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    this.updateBook(ratedBook);
  }

  updateBook(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }
}
