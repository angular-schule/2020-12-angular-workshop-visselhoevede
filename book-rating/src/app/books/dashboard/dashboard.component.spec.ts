import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';


@Component({
  selector: 'br-book',
  template: ''
})
class BookComponentStub {
  @Input() book: Book;
  @Output() rateDown = new EventEmitter<Book>();
  @Output() rateUp = new EventEmitter<Book>();
  @Input() disableDownButton = false;
  @Input() disableUpButton = false;
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    const bookRatingMock = {
      rateUp: book => book,
      disableDownButton: () => false,
      disableUpButton: () => false
    };

    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        BookComponentStub
      ],
      providers: [{
        provide: BookRatingService,
        useValue: bookRatingMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doRateUp should forward all calls to BookRatingService', () => {

    const rs = TestBed.inject(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough();

    const testBook = { isbn: '000' } as Book;
    component.doRateUp(testBook);

    expect(rs.rateUp).toHaveBeenCalledOnceWith(testBook)
  });
});
