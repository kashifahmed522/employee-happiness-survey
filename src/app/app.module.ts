import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Chart } from 'chart.js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelProvider } from './label-provider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { appReducer } from './shared/store/app.reducer';
import { JwtInterceptorInterceptor } from './interceptor/jwtinterceptor.interceptor';
import { HappinessIndexMetricsComponent } from './happiness-index-metrics/happiness-index-metrics.component';
// import { MenuComponent } from './shared/components/menu/menu.component';

export function labelProviderFactory(provider: LabelProvider) {
  return () => provider.load();
}

@NgModule({
  declarations: [AppComponent, HappinessIndexMetricsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule,
    RouterModule,
    StoreModule.forRoot({ myRootState: appReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    // SharedService,
    LabelProvider,
    {
      provide: APP_INITIALIZER,
      useFactory: labelProviderFactory,
      deps: [LabelProvider],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
