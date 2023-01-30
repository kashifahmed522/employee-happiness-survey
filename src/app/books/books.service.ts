import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './store/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private _httpClient: HttpClient) {}

  get() {
    return this._httpClient.get<Book>('http://localhost:3000/books');
  }

  create(payload: Book) {
    return this._httpClient.post<Book>('http://localhost:3000/books/', payload);
  }
}
