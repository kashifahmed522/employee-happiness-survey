import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { AppState } from 'src/app/shared/store/appstate';
import { addBookAPI } from '../store/book.action';
import { selectBookById } from '../store/book.selector';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  public fields: any[] = [];
  grid = 1;

  constructor(
    private _store: Store,
    private _appState: Store<AppState>,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id;
    let fetchFormData$ = this._activatedRoute.paramMap.pipe(
      switchMap((param) => {
        id = Number(param.get('id'));
        return this._store.pipe(select(selectBookById(id)));
      })
    );

    fetchFormData$.subscribe((data) => {
      this.fields = [
        {
          type: 'text',
          name: 'title',
          label: 'Name of Book',
          value: data?.title || '',
          required: true,
        },
        {
          type: 'text',
          name: 'author',
          label: 'Name of Author',
          value: data?.author || '',
          required: true,
        },
        {
          type: 'number',
          name: 'cost',
          label: 'Cos',
          value: data?.cost || '',
          required: true,
        },
      ];
    });
  }

  onUpload(e: any) {
    console.log(e);
  }

  formData(form: FormGroup) {
    if (form.valid) {
      this._store.dispatch(addBookAPI({ payload: { ...form.value } }));
      let appStatus$ = this._appState.pipe(select(selectAppState));
      appStatus$.subscribe((data) => {
        if (data.apiStatus === 'success') {
          this._appState.dispatch(
            setAPIStatus({
              apiStatus: { apiResponseMessage: '', apiStatus: '' },
            })
          );
          this._router.navigate(['/']);
        }
      });
    }
  }
}
