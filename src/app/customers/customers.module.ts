import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
// import { LabelPipePipe } from '../shared/pipes/label.pipe';
import { AddressComponent } from './components/address/address.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './components/button/button.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { GenderComponent } from './components/gender/gender.component';
import { ErrorComponent } from './components/error/error.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { Dropdown1Component } from './components/dropdown1/dropdown1.component';
import { GenderMultipleOptionsComponent } from './components/gender-multip-options/gender-multiple-options';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { ValidationLabelDirective } from './directive/validation-label.directive';
import { YesNoRadioInputComponent } from './components/yes-no-radio-input/yes-no-radio-input.component';

@NgModule({
  declarations: [
    CustomersComponent,
    ModalComponent,
    ButtonComponent,
    // LabelPipePipe,
    PersonalDetailsComponent,
    UserFormComponent,
    ContactComponent,
    AddressComponent,
    GenderComponent,
    ErrorComponent,
    DropdownComponent,
    Dropdown1Component,
    GenderMultipleOptionsComponent,
    BasicInfoComponent,
    ValidationLabelDirective,
    YesNoRadioInputComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule,
  ],
})
export class CustomersModule { }
