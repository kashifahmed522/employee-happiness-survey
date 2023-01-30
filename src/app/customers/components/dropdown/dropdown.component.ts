import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-dropdown-component',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @ViewChildren('selectLang') langSelects!: QueryList<
    ElementRef<HTMLSelectElement>
  >;

  name = 'Angular';
  fieldArray: Array<number> = [0];
  languageList = [
    { name: 'Dothraki' },
    { name: 'Japanese' },
    { name: 'German' },
    { name: 'French' },
    { name: 'Spanish' },
    { name: 'Russian' },
    { name: 'Italian' },
  ];

  selectedLangs = new Set<string>();

  selected() {
    this.selectedLangs.clear();
    this.langSelects.forEach((ls) => {
      const selectedVal = ls.nativeElement.value;
      if (selectedVal && selectedVal !== 'undefined')
        this.selectedLangs.add(selectedVal);
    });
    console.log('langSelects', this.langSelects);
  }

  addFieldValue() {
    this.fieldArray.push(this.fieldArray.length);
  }

  deleteFieldValue(index: number, lang: string) {
    this.selectedLangs.delete(lang);
    this.fieldArray.splice(index, 1);
  }

  isSelected(lang: string) {
    return this.selectedLangs.has(lang);
  }
}
