import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-info-component',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(BasicInfoComponent);
    this.userForm = this._fb.group({
      basicInfo: [null, [Validators.required]],
      details: this._fb.group({
        parentalLeave: [null, [Validators.required]],
        othersLeave: this._fb.group({
          description: [null, [Validators.required]],
          returnDate: [null, [Validators.required]],
        }),
      }),
    });
  }
}
