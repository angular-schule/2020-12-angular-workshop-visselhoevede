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

  constructor(public br: BookRatingService) {

  }

  ngOnInit(): void {
    this.books = [{
      title: 'Angular',
      isbn: '9783864906466',
      description: 'Beschreibung',
      rating: 5,
      firstThumbnailUrl: 'http://covers.openlibrary.org/b/isbn/9783864906466-M.jpg'
    },
    {
      title: 'Die Stadt der träumenden Bücher',
      isbn: '9783492045490',
      description: 'Super',
      rating: 5,
      firstThumbnailUrl: 'http://covers.openlibrary.org/b/isbn/9783492045490-M.jpg'
    },
    {
      title: 'Der Herr der Ringe',
      isbn: '9783608939842',
      description: 'Toll',
      rating: 5,
      firstThumbnailUrl: 'http://covers.openlibrary.org/b/isbn/9783608960358-M.jpg'
    }];
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
