import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
  // viewProviders: [
  //   { provide: ControlContainer, useExisting: FormGroupDirective },
  // ],
})
export class GenderComponent implements OnInit {
  @Input() controlName!: string;

  @Output() changed = new EventEmitter<boolean>();

  public parentForm!: FormGroup;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    console.log('this.controlName', this.controlName);

    this.parentForm = this.controlContainer.control as FormGroup;
  }

  onNo() {
    this.changed.emit(false);
  }
  onYes() {
    this.changed.emit(true);
  }

  get control(): FormControl {
    return this.parentForm.get(this.controlName) as FormControl;
  }

  get form(): FormGroupDirective {
    return this.controlContainer as FormGroupDirective;
  }
}
