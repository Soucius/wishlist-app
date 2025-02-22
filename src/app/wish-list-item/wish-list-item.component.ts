import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent {
  @Input() wishText!: string;
  @Input() fullFilled!: boolean;
  @Output() fullFilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    // return this.fullFilled ? ['strikeOut', 'text-muted'] : [];
    return {'strikeOut text-muted': this.fullFilled};
  }

  toggleFullFilled() {
    this.fullFilled = !this.fullFilled;
    this.fullFilledChange.emit(this.fullFilled);
  }
}
