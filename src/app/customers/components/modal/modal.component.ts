import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  isOpened: boolean = false;
  constructor() { }
  @Input('modalTitle') modalTitle!: string;
  @Input('color') color!: 'light' | 'continue' | 'normal';

  ngOnDestroy() {
    this.isOpened = false;
  }

  openModal() {
    this.isOpened = true;
  }

  buttonTriggered(event: any) {
    this.isOpened = true;
    console.log(event);

  }

  closeModal() {
    this.isOpened = false;
  }

}
