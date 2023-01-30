import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Questionair, SurveyForm } from './store/survey';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  constructor(private _httpClient: HttpClient) { }

  get() {
    return this._httpClient.get<Questionair>('http://localhost:3000/questionnaire');
  }

  getSurveyFormData() {
    return this._httpClient.get<SurveyForm>('http://localhost:3000/surveyForm');
  }

  saveSurveyFormData(body: any) {
    console.log(body);
    
    return this._httpClient.post('http://localhost:3000/surveyFormStoreResult', body);
  }

  create(payload: Questionair) {
    return this._httpClient.post<Questionair>('http://localhost:3000/books/', payload);
  }
}
