import { Directive, Input, HostListener, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgControl, ValidationErrors } from '@angular/forms';
import { subscribeOn, Subscription } from 'rxjs';
import { ValidationMessageService } from '../services/validation-msg.service';


@Directive({
  selector: '[appValidationLabel]'
  // selector: '[ngModel],[formControl],formControlName',
})
export class ValidationLabelDirective implements OnInit {


  constructor(
    private elRef: ElementRef,
    private control: NgControl,
    private validationMsgService: ValidationMessageService
  ) { }


  @Input('formControlName') formControlName!: string;
  errorSpanId = '';
  statusChangeSubscription!: Subscription | any;


  ngOnInit(): void {
    this.errorSpanId = this.formControlName + '-error';
    this.statusChangeSubscription = this.control?.statusChanges?.subscribe(
      (status) => {
        if (status === 'INVALID') {
          this.showError();
        } else {
          this.removeError();
        }
      }
    );
  }


  @HostListener('blur', ['$event'])
  handleBlurEvent(event: any) {
    console.log('this.control.value => ', this.control.value);
    if (this.control.errors) {
      this.showError();
    } else {
      this.removeError();
    }
  }



  errorMessageShow(errorKey: string, params?: any) {
    switch (errorKey) {
      case 'required':
        return `This field is required`;
      case 'max':
        return `Maximum ${params ? params.requiredLength : ''} characters are allowed`;
      case 'minlength':
        return `Minimum ${params ? params.requiredLength : ''} characters are required`
      case 'pattern':
        return `Field is Invalid.`
      case 'min':
        return `Minimum amount should be ₹ ${params.min}`;
      case 'whitespace':
        return `White spaces are not allowed`

      default:
        return ''
    }
  }

  private showError() {
    this.removeError();
    const valErrors = this.control.errors;
    const firstKey = valErrors && Object.keys(valErrors)[0];
    const errorMsgKey = this.formControlName + '-' + firstKey;
    // const errorMsg = this.validationMsgService.getValidationMsg(errorMsgKey);
    let error = '';
    if (firstKey) {
      error = this.errorMessageShow(firstKey);
    }

    const errorMsg = this.returnString(this.formControlName);
    const errSpan = '<span style="color:red;" id="' + this.errorSpanId + '">' + error + '</span>';
    this.elRef.nativeElement.parentElement.insertAdjacentHTML('beforeend', errSpan);
    this.elRef.nativeElement.classList.add('is-invalid');
  }


  private removeError(): void {
    const errorElement = document.getElementById(this.errorSpanId);
    if (errorElement) {
      this.elRef.nativeElement.classList.remove('is-invalid');
      errorElement.remove();
    }
  }

  returnString(fieldName: string): string {
    let str = fieldName.split("");

    let transformString: string = '';

    for (let index = 0; index < str.length; index++) {
      if (this.isCapital(str[index])) {
        return transformString += " " + str.slice(index, str.length).join("");
      } else {
        if (index === 0) {
          transformString += str[index].toUpperCase();
        } else {
          transformString += str[index];
        }
      }
    }
    return transformString;
  }

  isCapital(char: any) {
    return char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
  }
}
