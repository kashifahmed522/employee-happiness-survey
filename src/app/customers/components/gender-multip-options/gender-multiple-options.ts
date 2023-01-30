import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-gender-multiple-options',
  templateUrl: './gender-multiple-options.html',
  styleUrls: ['./gender-multiple-options.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class GenderMultipleOptionsComponent {
  childForm!: any;
  @Input() controlName!: string;

  form!: FormGroup;

  constructor(
    public parentForm: FormGroupDirective,
    private _fb: FormBuilder
  ) {}

  leaves = new FormControl(null, [Validators.required]);

  ngOnInit(): void {
    this.childForm = this.parentForm.form;
    this.childForm.addControl(
      this.controlName,
      new FormGroup({
        parentalLeave: new FormControl(null, [Validators.required]),
        otherLeave: this.formGroupOther(),
      })
    );

    this.form = this._fb.group({
      leaves: [null, Validators.required],
    });
  }

  formGroupOther() {
    return this._fb.group({
      returnDateOfWorkOther: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

}
