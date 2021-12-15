import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() title!: string;
  @Input() isDisabled: boolean = false;
  @Output() handleClickEvent = new EventEmitter()

  handleClick() {
    this.handleClickEvent.emit();
  }
}
