import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  @Input() grid!: number;
  @Input() formGroup!: FormGroup;

  @Output() eventTrigger = new EventEmitter();

  constructor() {}

  ngOnInit() {
    let fieldsCtrls: any = {};
    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(
          f.value || '',
          Validators.required
        );
      } else {
        let opts: any = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts);
      }
    }
  }

  savedData() {
    this.eventTrigger.emit(true);
  }
}
