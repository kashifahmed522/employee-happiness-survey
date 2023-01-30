import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Questionair, SurveyForm } from './survey';

export const selectQuestionair = createFeatureSelector<Questionair[]>('mySurvey');
export const selectSurveyForm = createFeatureSelector<SurveyForm[]>('mySurvey');

// export const selectBookById = (bookId: number) => {
  
//   return createSelector(selectQuestionair, (books: Questionair[]) => {
//     var bookById = books.filter((_) => _.id === bookId);
//     console.log({ books });
//     if (bookById.length == 0) return null;
//     return bookById[0];
//   });
// };
