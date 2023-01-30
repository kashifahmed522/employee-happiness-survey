import { createAction, props } from '@ngrx/store';
import { Book } from './book';

export const invokeBooksAPI = createAction(
  '[Books API] invoke books Fetch API'
);

export const booksFetchAPISuccess = createAction(
  '[Books API] books fetch api success',
  props<{ allBooks: any }>()
);

export const addBookAPI = createAction(
  '[Add Book API] invoke add new book API',
  props<{ payload: Book }>()
);

export const bookAddedAPISuccess = createAction(
  '[Saved Book API Data] added api response',
  props<{ response: Book }>()
);
