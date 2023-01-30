import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  isClicked: boolean = false;

  @Output() buttonClicked = new EventEmitter<string>();
  @Input() bgButtonColor!: string;

  buttonColor!: string;

  setStyle() {
    return {
      'background-color': this.buttonColor
    }
  }

  ngOnInit(): void {
    this.buttonColor = `var(--${this.bgButtonColor})`;
  }

  onButtonClicked() {
    // if (this.bgButtonColor === 'normal') {
      this.isClicked = !this.isClicked;
    // }
    this.buttonClicked.emit(this.bgButtonColor);
  }

}
