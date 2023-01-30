import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { Dropdown1Component } from './components/dropdown1/dropdown1.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'dropdown1', component: Dropdown1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
