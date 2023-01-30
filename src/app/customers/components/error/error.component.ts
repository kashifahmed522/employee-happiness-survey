import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'error-component',
  templateUrl: 'error.component.html',
  styleUrls: ['error.component.scss'],
})
export class ErrorComponent {
  errorMsgList: any = [];

  @Input() controlName!: AbstractControl | AbstractControlDirective;

  errorMessage: any = {
    required: (params: any) => `This field is required`,
    maxlength: (params: { requiredLength: any }) =>
      `Maximum ${params.requiredLength} characters are allowed`,
    minlength: (params: { requiredLength: any }) =>
      `Minimum ${params.requiredLength} characters are required`,
    pattern: (params: any) => `Invalid format`,
    min: (params: { min: any }) => `Minimum amount should be ₹ ${params.min}`,
    whitespace: (params: any) => `White spaces are not allowed`,
  };

  ngOnInit() {
    console.log(this.errorMessage);
  }
  listErrors() {
    if (!this.controlName) return [];
    if (this.controlName.errors) {
      this.errorMsgList = [];
      Object.keys(this.controlName.errors).map((error) => {
        this.controlName.touched || this.controlName.dirty
          ? this.controlName.errors &&
            this.errorMsgList.push(
              this.errorMessage[error](this.controlName.errors[error])
            )
          : '';
      });
      return this.errorMsgList;
    } else {
      return [];
    }
  }
}
