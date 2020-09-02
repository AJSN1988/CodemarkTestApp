import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  styleUrls: ['./clear-button.component.scss']
})
export class ClearButtonComponent {
  @Output() onClear = new EventEmitter<void>();

  clear() {
    this.onClear.emit();
  }

}
