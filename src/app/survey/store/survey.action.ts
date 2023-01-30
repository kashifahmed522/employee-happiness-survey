import { createAction, props } from '@ngrx/store';
import { Questionair, SurveyForm } from './survey';

export const invokeQuestionairAPI = createAction(
  '[Questionair API] invoke Questionair Fetch API'
);

export const QuestionairFetchAPISuccess = createAction(
  '[Questionair API] Questionair fetch api success',
  props<{ allQuestionair: any }>()
);

export const QuestionairAddedAPISuccess = createAction(
  '[Saved Questionair API Data] added api response',
  props<{ response: Questionair }>()
);

export const invokeSurveyFormAPI = createAction(
  '[SurveyForm API] invoke SurveyForm Fetch API'
);

export const SurveyFormFetchAPISuccess = createAction(
  '[SurveyForm API] SurveyForm fetch api success',
  props<{ allSurveyForm: any }>()
);

export const invokeSurveyFormAPIEmp = createAction(
  '[SurveyForm API] invoke SurveyForm Fetch API'
);

export const SurveyFormAddedAPISuccess = createAction(
  '[Saved SurveyForm API Data] added api response',
  props<{ response: any }>()
);

export const SavedSurveyForm = createAction(
  '[SurveyForm API] SavedSurveyForm send api success',
  props<{ payload: any }>()
);
