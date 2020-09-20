import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';

  array: string[];

  constructor() {
    this.array = [];
  }
  addItem(item: string) {
    this.array.push(item);
    for (let item of this.array) {
      console.log(item);
    }
  }


}
