import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';
import { AddComponent } from './add/add.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, AddComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    DynamicFormModule,
    ReactiveFormsModule,
    StoreModule.forFeature('myBooks', bookReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
})
export class BooksModule {}
