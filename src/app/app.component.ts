import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customer-app';
  expandMenu: boolean = false;
  constructor() {}
  ngOnInit(): void {}

  openNav(state: boolean) {
    this.expandMenu = !this.expandMenu;
  }
}
