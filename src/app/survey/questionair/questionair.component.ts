import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeQuestionairAPI } from '../store/survey.action';
import { selectQuestionair } from '../store/survey.selector';

@Component({
  selector: 'app-questionair',
  templateUrl: './questionair.component.html',
  styleUrls: ['./questionair.component.scss'],
})
export class QuestionairComponent implements OnInit {

  dynamicArray: any[] = [];
  newDynamic: any;
  controlsName: any[] = [
    {
      id: 1,
      name: 'Input Box'
    },
    {
      id: 2,
      name: 'Radio Button'
    },
    {
      id: 3,
      name: 'Checkbox'
    },
    {
      id: 4,
      name: 'Textarea'
    },
    {
      id: 5,
      name: 'Select'
    },
    {
      id: 6,
      name: 'Multi Select'
    }
  ]


  constructor(private _store: Store) { }
  questionairs$: any = this._store.pipe(select(selectQuestionair));

  ngOnInit(): void {
    this._store.dispatch(invokeQuestionairAPI());
  }

  // ngOnInit(): void {
  //   this.dynamicArray.push({ firstName: '', lastName: '', emailAddress: '' });
  // }

  addRow() {
    this.dynamicArray.push({ firstName: '', lastName: '', emailAddress: '' });
    console.log('New row added successfully', 'New Row');
  }
  deleteRow(index: number) {
    this.dynamicArray.splice(index, 1);
  }
  getValues() {
    console.log(this.dynamicArray);
  }
}
