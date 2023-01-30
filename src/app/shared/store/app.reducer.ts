import { createReducer, on } from '@ngrx/store';
import { setAPIStatus } from './app.action';
import { AppState } from './appstate';

const initialState: AppState = {
  apiStatus: '',
  apiResponseMessage: '',
};

export const appReducer = createReducer(
  initialState,
  on(setAPIStatus, (state, { apiStatus }) => apiStatus)
);
