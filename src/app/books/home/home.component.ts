import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeBooksAPI } from '../store/book.action';
import { selectBooks } from '../store/book.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _store: Store) {}
  books$: any = this._store.pipe(select(selectBooks));

  ngOnInit(): void {
    this._store.dispatch(invokeBooksAPI());
  }
}
