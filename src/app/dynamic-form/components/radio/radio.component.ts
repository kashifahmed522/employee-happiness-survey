import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  @Input() field: any = {};
  @Input() form!: FormControl;

  ngOnInit(): void {}
}
