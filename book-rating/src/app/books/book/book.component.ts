import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input()
  book: Book;

  @Output()
  rateDown = new EventEmitter<Book>();

  @Output()
  rateUp = new EventEmitter<Book>();

  @Input()
  disableDownButton = (book: Book) => false;

  @Input()
  disableUpButton = (book: Book) => false;

  doRateDown(): void {
    this.rateDown.emit(this.book);
  }

  doRateUp(): void {
    this.rateUp.emit(this.book);
  }


  isAngular(): boolean {
    return this.book.title === 'Angular';
  }

  get stars(): undefined[] {
    return new Array(this.book.rating);
  }
}
