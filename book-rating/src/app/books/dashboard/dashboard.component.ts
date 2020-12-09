import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

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
    // debugger;
  }

  doRateUp(book: Book): void {
    // debugger;
  }
}
