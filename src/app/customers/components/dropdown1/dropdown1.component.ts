import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-dropdown1-component',
  templateUrl: './dropdown1.component.html',
  styleUrls: ['./dropdown1.component.scss'],
})
export class Dropdown1Component implements OnInit {
  @ViewChildren('selectPhoneTypeElement') selectPhoneTypeElement!: QueryList<
    ElementRef<HTMLSelectElement>
  >;

  fieldArray: Array<number> = [0];

  phoneTypeSet = new Set<string>();

  phoneTypeList = [
    { name: 'Urdu' },
    { name: 'Japanese' },
    { name: 'German' },
    { name: 'French' },
    { name: 'Spanish' },
    { name: 'Russian' },
    { name: 'Italian' },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log(Dropdown1Component);
  }

  selectedPhoneType() {
    this.phoneTypeSet.clear();
    this.selectPhoneTypeElement.forEach((phoneType) => {
      let selectedValue = phoneType.nativeElement.value;
      if (selectedValue) this.phoneTypeSet.add(selectedValue);
    });
  }

  isSelected(name: string) {
    return this.phoneTypeSet.has(name);
  }

  addFieldValue() {
    this.fieldArray.push(this.fieldArray.length);
  }
}
