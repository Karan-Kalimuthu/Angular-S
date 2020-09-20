import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss']
})
export class OrangeComponent implements OnInit {
  temporaryItem: string;

  @Output() addItemClicked: EventEmitter<string>;

  constructor() {
    this.addItemClicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  addItem() {
    this.addItemClicked.emit(this.temporaryItem);
    this.temporaryItem = '';
  }
}
