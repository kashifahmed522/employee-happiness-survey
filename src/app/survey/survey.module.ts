import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './survey.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { surveyReducer } from './store/survey.reducer';
import { SurveyEffects } from './store/survey.effects';
import { QuestionairComponent } from './questionair/questionair.component';

@NgModule({
  declarations: [
    SurveyComponent,
    QuestionairComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    DynamicFormModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('mySurvey', surveyReducer),
    EffectsModule.forFeature([SurveyEffects]),
  ]
})
export class SurveyModule { }
