import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-patients-display-table',
  templateUrl: './patients-display-table.component.html',
  styleUrls: ['./patients-display-table.component.scss']
})
export class PatientsDisplayTable {
  @Input() headers: string[] = [];
  @Input() rowData: any;
}
