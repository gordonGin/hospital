import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-mode-options',
  templateUrl: './mode-options.component.html',
  styleUrls: ['./mode-options.component.scss']
})
export class ModeOptionsComponent implements OnInit {
  fetchPatientsButtonText = 'Fetch Patients';
  doDrugsButtonText = 'Do Drugs';

  @Input() hasPatients: boolean = false;
  @Output() handleFetchPatientsClick = new EventEmitter();
  @Output() handleAdministrateDrugsClick = new EventEmitter();

  handlePatientsClick() {
    this.handleFetchPatientsClick.emit();
  }

  handleDrugsAdministration() {
    this.handleAdministrateDrugsClick.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
