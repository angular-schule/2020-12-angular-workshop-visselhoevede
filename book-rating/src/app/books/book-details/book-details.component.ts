import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, share, shareReplay, switchMap } from 'rxjs/operators';

import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails: false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.getSingleBook(isbn).pipe(
      catchError((err: HttpErrorResponse) => of({
        isbn: '0',
        title: 'Es kam zu einem Fehler!',
        description: err.message,
        rating: 1
      }))
    )),
    shareReplay(1)
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }
}
