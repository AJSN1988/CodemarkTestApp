import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imageSrc: String;
  @Input() tag: String;

  @Output() onCardClick = new EventEmitter<String>();

  cardClickHandler(): void {
    this.onCardClick.emit(this.tag);
  }
}
