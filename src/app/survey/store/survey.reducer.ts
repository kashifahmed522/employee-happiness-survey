import { Questionair } from './survey';
import { createReducer, on } from '@ngrx/store';
import { QuestionairAddedAPISuccess, QuestionairFetchAPISuccess, SurveyFormAddedAPISuccess, SurveyFormFetchAPISuccess } from './survey.action';

export const initialState: ReadonlyArray<Questionair> = [];

export const surveyReducer = createReducer(
  initialState,
  on(QuestionairFetchAPISuccess, (state, { allQuestionair }) => {
    return allQuestionair;
  }),
  on(SurveyFormFetchAPISuccess, (state, { allSurveyForm }) => {
    return allSurveyForm;
  }),
  on(SurveyFormAddedAPISuccess, (state, { response }) => {
    return response;
  })
);
