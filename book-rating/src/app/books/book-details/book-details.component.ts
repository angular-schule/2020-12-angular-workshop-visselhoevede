import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { catchError, concatMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

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
      switchMap(isbn => this.bs.getSingleBook(isbn).pipe(
        catchError((err: HttpErrorResponse) => of({
          isbn: '0',
          title: 'Es kam zu einem Fehler!',
          description: err.message,
          rating: 1
        }))
      ))

    )
    .subscribe(b => this.book = b);


    // this.bs.getSingleBook(this.isbn)
    //   .subscribe(book => this.book = book);
  }

}
