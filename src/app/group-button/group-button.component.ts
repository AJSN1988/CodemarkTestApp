import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-group-button',
  templateUrl: './group-button.component.html',
  styleUrls: ['./group-button.component.scss']
})
export class GroupButtonComponent {
  @Output() onGroup = new EventEmitter();

  groupEnable: Boolean;

  constructor() {
    this.groupEnable = true;
  }

  clickHandler() {
    this.groupEnable = !this.groupEnable;
    this.onGroup.emit();
  }
}
