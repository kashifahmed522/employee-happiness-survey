import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-yes-no-radio-input',
  templateUrl: './yes-no-radio-input.component.html',
  styleUrls: ['./yes-no-radio-input.component.scss'],
})
export class YesNoRadioInputComponent implements OnInit {
  @Input() name!: string;

  @Output() changed = new EventEmitter<boolean>();

  public parentForm!: FormGroup;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    console.log('this.name', this.name);

    this.parentForm = this.controlContainer.control as FormGroup;
  }

  onNo() {
    this.changed.emit(false);
  }
  onYes() {
    this.changed.emit(true);
  }

  get control(): FormControl {
    return this.parentForm.get(this.name) as FormControl;
  }

  get form(): FormGroupDirective {
    return this.controlContainer as FormGroupDirective;
  }
}
