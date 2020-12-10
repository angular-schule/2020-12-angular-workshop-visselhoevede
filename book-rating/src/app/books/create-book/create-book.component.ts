import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl(),
  });

  isInvalid(name: string): boolean {
    const control = this.bookForm.get(name);
    return control.invalid && control.touched;
  }

  // name: isbn / title
  // code: required / minlength
  hasError(name: string, code: string): boolean {
    const control = this.bookForm.get(name);
    return control.invalid && control.hasError(code);
  }

  submitBook() {
    var newBook = {
      ...this.bookForm.value,
      rating: 1
    }

    // HANDS ON
    // 1. Erzeuge einen EventHandler mit dem Namen `create`
    // 2. Versende das neue Buch über diesen EventHandler
    // 3. Aboniere dich auf das Event im Dashboard
    // 4. Füge das neue Buch dem Buch-Array hinzu (immutable!)

    this.bookForm.reset();
  }

}
