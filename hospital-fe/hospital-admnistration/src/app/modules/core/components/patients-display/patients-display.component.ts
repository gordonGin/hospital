import {Component, Input, OnInit} from '@angular/core';
import {MedicalConditions} from "../../../../../interfaces/interfaces/MedicalConditions";

@Component({
  selector: 'app-patients-display',
  templateUrl: './patients-display.component.html',
  styleUrls: ['./patients-display.component.scss']
})


export class PatientsDisplay {
  @Input() medicalConditions: MedicalConditions[] = [] as MedicalConditions[];
  @Input() headers = ['Medical Condition', 'Patients Number'] as string[];
}
