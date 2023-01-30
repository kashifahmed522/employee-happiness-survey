import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
})
export class TextboxComponent {
  @Input() field: any = {};
  @Input() form!: FormControl;
  get isValid() {
    return this.form.valid;
  }
  get isDirty() {
    return this.form.dirty;
  }

  constructor() {}
  ngOnInit() {
    // console.log(this.isDirty);
  }
}
