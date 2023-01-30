import { Book } from './book';
import { createReducer, on } from '@ngrx/store';
import { bookAddedAPISuccess, booksFetchAPISuccess } from './book.action';

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(booksFetchAPISuccess, (state, { allBooks }) => {
    return allBooks;
  }),
  on(bookAddedAPISuccess, (state, { response }) => {
    let newState = [...state];
    newState.unshift(response);
    return newState;
  })
);
