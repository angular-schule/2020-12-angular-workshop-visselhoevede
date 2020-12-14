import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('https://api.angular.schule/books');
  }

  getSingleBook(isbn: string): Observable<Book> {
    return this.http.get<Book>('https://api.angular.schule/book/' + isbn).pipe(
      // delay(Math.floor(Math.random() * 10) + 1) // debug slow connections
    );
  }
}
