import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HappinessIndexMetricsComponent } from '../happiness-index-metrics/happiness-index-metrics.component';
import { SurveyComponent } from './survey.component';

const routes: Routes = [
  { path: '', component: SurveyComponent },
  { path: 'happines-index', component: HappinessIndexMetricsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
