import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { invokeSurveyFormAPI, SavedSurveyForm } from './store/survey.action';
import { selectSurveyForm } from './store/survey.selector';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  surveyFormData$: any = this._store.pipe(select(selectSurveyForm));
  surveyForm!: FormGroup;
  submitted = false;
  surveyFormDataSubscribedData: any;
  constructor(private _store: Store, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._store.dispatch(invokeSurveyFormAPI());

    this.surveyFormData$
      .subscribe((data: any) => {
        console.log(data);
        if (data && data.length) {
          this.surveyFormDataSubscribedData = data
          this.surveyFormCreatino(data)
        }
      }
      );

    // this.surveyFormCreatino();

  }

  surveyFormCreatino(data: any) {
    let checkboxData = data.find((item: { type: string; }) => item.type === 'checkbox');

    this.surveyForm = this.formBuilder.group({
      empName: ['', Validators.required],
      submissionDate: ['', Validators.required],
      radio: ['', Validators.required],
      checkArray: this.formBuilder.array([]),
      select: ['', [Validators.required]],
      multiSelect: ['', Validators.required]
    });
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.surveyForm.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit() {
    console.log(this.surveyForm.value);
    this._store.dispatch(SavedSurveyForm({ payload: this.surveyForm.value }));

  }

}
