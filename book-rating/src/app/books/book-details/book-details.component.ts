import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  book: Book;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      map(isbn => this.bs.getSingleBook(isbn))
    )
    .subscribe(x => {
      x.subscribe(b => this.book = b);
    });


    // this.bs.getSingleBook(this.isbn)
    //   .subscribe(book => this.book = book);
  }

}
