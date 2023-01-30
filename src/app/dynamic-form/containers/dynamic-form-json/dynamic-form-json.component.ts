import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-json',
  templateUrl: './dynamic-form-json.component.html',
  styleUrls: ['./dynamic-form-json.component.scss'],
})
export class DynamicFormJsonComponent implements OnInit {
  @Input()
  gridSize!: any;
  @Input() fields: any[] = [];
  @Input() title: string = '';

  @Output() eventEmitter = new EventEmitter();

  public form: FormGroup;
  unsubcribe: any;

  // gridSize!: number;

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields)),
    });
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      this.fields = JSON.parse(update.fields);
    });
  }

  ngOnInit() {
    this.form = new FormGroup({});
    this.fields.forEach((x) => {
      if (x.type == 'checkbox') {
        this.form.addControl(x.name, new FormGroup({}));
        x.options.forEach((o: { key: any }) => {
          (this.form.get(x.name) as FormGroup).addControl(
            o.key,
            new FormControl(false)
          );
        });
      } else {
        this.form.addControl(
          x.name,
          new FormControl(
            x.value || '',
            x.required ? Validators.required : null
          )
        );
      }
    });
  }

  getFields() {
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }

  savedButtonCicked(clicked: boolean) {
    this.eventEmitter.emit(this.form);
  }
}
