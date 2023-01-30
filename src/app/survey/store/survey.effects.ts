import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { AppState } from 'src/app/shared/store/appstate';
import { SurveyService } from '../survey.service';
import {
  invokeQuestionairAPI,
  invokeSurveyFormAPI,
  invokeSurveyFormAPIEmp,
  QuestionairFetchAPISuccess,
  SurveyFormAddedAPISuccess,
  SurveyFormFetchAPISuccess
} from './survey.action';

@Injectable()
export class SurveyEffects {
  constructor(
    private _action$: Actions,
    private _surveyService: SurveyService,
    private _appState: Store<AppState>
  ) { }

  loadAllQuestionair$ = createEffect(() =>
    this._action$.pipe(
      ofType(invokeQuestionairAPI),
      switchMap(() => {
        return this._surveyService
          .get()
          .pipe(map((data) => QuestionairFetchAPISuccess({ allQuestionair: data })));
      })
    )
  );

  loadAllSurveyForm$ = createEffect(() =>
    this._action$.pipe(
      ofType(invokeSurveyFormAPI),
      switchMap(() => {
        return this._surveyService
          .getSurveyFormData()
          .pipe(map((data) => SurveyFormFetchAPISuccess({ allSurveyForm: data })));
      })
    )
  );

  saveSurveyForm$ = createEffect(() =>
    this._action$.pipe(
      ofType(invokeSurveyFormAPIEmp),
      switchMap((action) => {
        console.log(action);

        return this._surveyService
          .saveSurveyFormData(action)
          .pipe(map((data) => SurveyFormAddedAPISuccess({ response: data })));
      })
    )
  );

  // saveSurveyForm$ = createEffect(() =>
  //   this._action$.pipe(
  //     ofType(saveBooks),
  //     switchMap((action) => {
  //       this._appStore.dispatch(setAPISuccess({ appStatus: { apiStatus: '', apiResponseMessage: '' } }));
  //       return this._bookService
  //         .create(action.payload)
  //         .pipe(map((data) => {
  //           this._appStore.dispatch(setAPISuccess({ appStatus: { apiStatus: 'Success', apiResponseMessage: '' } }));
  //           return saveBooksSuccess({ response: data })
  //         }))
  //     })
  //   ))
}
