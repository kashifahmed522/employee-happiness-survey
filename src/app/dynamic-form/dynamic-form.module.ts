import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FileComponent } from './components/file/file.component';
import { RadioComponent } from './components/radio/radio.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { FieldBuilderComponent } from './containers/field-builder/field-builder.component';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { DynamicFormJsonComponent } from './containers/dynamic-form-json/dynamic-form-json.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CheckboxComponent,
    DropdownComponent,
    FileComponent,
    RadioComponent,
    TextboxComponent,
    FieldBuilderComponent,
    DynamicFormComponent,
    DynamicFormJsonComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    CheckboxComponent,
    DropdownComponent,
    FileComponent,
    RadioComponent,
    TextboxComponent,
    FieldBuilderComponent,
    DynamicFormComponent,
    DynamicFormJsonComponent,
  ],
  entryComponents: [],
})
export class DynamicFormModule {}
