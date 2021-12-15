import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-patients-form',
  templateUrl: './patients-form.component.html',
  styleUrls: ['./patients-form.component.scss']
})
export class PatientsFormComponent implements OnInit {
  medications = ['As', 'An', 'I', 'P', 'I,An', 'P,As', ''] as string[];
  patientsForm: FormGroup = {} as FormGroup;
  @Output() handleSubmitFormEvent = new EventEmitter()

  handleSubmitForm() {
    this.handleSubmitFormEvent.emit(this.patientsForm);
  }

  ngOnInit(): void {
    this.patientsForm = new FormGroup({
      F: new FormControl(0),
      H: new FormControl(0),
      D: new FormControl(0),
      T: new FormControl(0),
      X: new FormControl(0),
      medication: new FormControl('As'),
    }, {validators: this.hasAtLeastOneMedicalConditionWithPatients(['F', 'H', 'T', 'D'])});
  }

  hasAtLeastOneMedicalConditionWithPatients(fields: string[]): any {
    return (formGroup: FormGroup) => {
      const isValid = Object.values(fields).some((attribute) => {
        const { value }: any = formGroup.get(attribute);
        return value > 0;
      })
      return isValid ? null : {isValid: false}
    }
  }
}