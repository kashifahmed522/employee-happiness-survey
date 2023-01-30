import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LabelProvider {
  private fetchedLabel: any;

  constructor(private _httpClient: HttpClient) {}

  public getLabel() {
    return this.fetchedLabel;
  }

  load() {
    console.log(
      '%cLoading label...',
      'background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;'
    );
    if (!this.fetchedLabel) {
      return this._httpClient
        .get('../../assets/label.json')
        .subscribe((response: {}) => {
          this.fetchedLabel = response;
          console.log(
            '%cLoading label completes',
            'background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;'
          );
        });
    }
    return this.fetchedLabel;
  }
}
