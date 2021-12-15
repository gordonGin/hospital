import { Component, Input } from '@angular/core';
import { HISTORY_TABLE_HEADERS } from "../../../../Constants";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  @Input() history: any[] = [];
  historyTableHeaders = HISTORY_TABLE_HEADERS;
}
