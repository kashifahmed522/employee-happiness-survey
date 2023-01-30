import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { AppState } from 'src/app/shared/store/appstate';
import { BooksService } from '../books.service';
import {
  addBookAPI,
  bookAddedAPISuccess,
  booksFetchAPISuccess,
  invokeBooksAPI,
} from './book.action';

@Injectable()
export class BookEffects {
  constructor(
    private _action$: Actions,
    private _bookService: BooksService,
    private _appState: Store<AppState>
  ) {}

  loadAllBooks$ = createEffect(() =>
    this._action$.pipe(
      ofType(invokeBooksAPI),
      switchMap(() => {
        return this._bookService
          .get()
          .pipe(map((data) => booksFetchAPISuccess({ allBooks: data })));
      })
    )
  );

  addABook$ = createEffect(() =>
    this._action$.pipe(
      ofType(addBookAPI),
      switchMap((action) => {
        this._appState.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this._bookService.create(action.payload).pipe(
          map((data) => {
            this._appState.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return bookAddedAPISuccess({ response: data });
          })
        );
      })
    )
  );
}
