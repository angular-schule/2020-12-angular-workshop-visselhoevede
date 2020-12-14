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
      map(paramMap => paramMap.get('isbn'))
    )
    .subscribe(x => {
      this.isbn = x;
      this.bs.getSingleBook(this.isbn).subscribe(b => this.book = b);
    });


    // this.bs.getSingleBook(this.isbn)
    //   .subscribe(book => this.book = book);
  }

}
