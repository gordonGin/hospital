import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-mode-options',
  templateUrl: './mode-options.component.html',
  styleUrls: ['./mode-options.component.scss']
})
export class ModeOptionsComponent implements OnInit {
  fetchPatientsButtonText = 'Fetch Patients';
  giveMedicationButtonText = 'Give Medication';
  resetButtonText = 'Reset';

  @Input() isDrugsAdministratedButtonDisabled: boolean = false;
  @Input() isManualModeEnabled: boolean = false;
  @Output() handleFetchPatientsClick = new EventEmitter();
  @Output() handleAdministrateDrugsClick = new EventEmitter();
  @Output() handleResetClick = new EventEmitter();


  handlePatientsClick() {
    this.handleFetchPatientsClick.emit();
  }

  handleDrugsAdministration() {
    this.handleAdministrateDrugsClick.emit();
  }

  handleReset () {
    this.handleResetClick.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
