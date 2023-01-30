import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ControlContainer,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class AddressComponent implements OnInit {
  childForm: any;
  @Input() name!: string;

  constructor(public parentForm: FormGroupDirective) {}

  ngOnInit() {
    console.log(this.name);
    
    this.childForm = this.parentForm.form;
    this.childForm.addControl(
      this.name,
      new FormGroup({
        streetName: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        pinCode: new FormControl(null, [Validators.required]),
      })
    );
  }
}
