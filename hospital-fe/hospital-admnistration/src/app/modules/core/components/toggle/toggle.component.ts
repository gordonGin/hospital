import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Output() handleToggleChange = new EventEmitter()
  @Input() checkedText: string = '';
  @Input() uncheckedText: string = '';
  @Input() isEnabled: boolean = false;

  onToggleChange(event: any = {} as any) {
    this.handleToggleChange.emit(event?.target?.checked);
  }
}
