import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'field-builder',
  templateUrl: './field-builder.component.html',
  styleUrls: ['./field-builder.component.scss'],
})
export class FieldBuilderComponent implements OnInit {
  @Input() field: any;
  @Input() form!: any | FormGroup;

  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
  get isDirty() {
    return this.form.controls[this.field.name].dirty;
  }

  constructor() {}

  ngOnInit() {
    // console.log(this.form.controls[this.field.name].valid);
  }
}
