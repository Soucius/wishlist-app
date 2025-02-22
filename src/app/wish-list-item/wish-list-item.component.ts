import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {
  @Input() wishText!: string;
  @Input() fullFilled!: boolean;
  @Output() fullFilledChange = new EventEmitter<boolean>();

  toggleFullFilled() {
    this.fullFilled = !this.fullFilled;
    this.fullFilledChange.emit(this.fullFilled);
  }
}
