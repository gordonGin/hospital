import { Component, OnInit } from '@angular/core';
import {Quarantine} from "hospital-lib";
import {FacadeService} from "../../../../services/facade-service.service";
import mapReportedPatientsToEntity from "../../../../../interfaces/mappers/MedicalConditionsMapper";
import Patients from "../../../../../interfaces/interfaces/Patients";
import {MedicalConditions} from "../../../../../interfaces/interfaces/MedicalConditions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  quarantine: Quarantine = {} as Quarantine;
  drugs: any = [];
  medicalConditions: MedicalConditions[] = [];
  history: any = [];
  isDrugsAdministratedButtonDisabled: boolean = true;

  handlePatientsClick() {
      this.isDrugsAdministratedButtonDisabled = false;

      this.facadeService.getPatients().subscribe(
          (patients: Patients) => {
              this.quarantine = new Quarantine(patients);

              this.medicalConditions = mapReportedPatientsToEntity(this.quarantine.report());
          }
      );
  };

  handleAdministrateDrugsToPatients() {
      this.isDrugsAdministratedButtonDisabled = true;
      const inputMedicalConditions = {...this.medicalConditions}
      this.facadeService.getDrugs().subscribe((drugs) => {
          this.quarantine.setDrugs(drugs)
          this.drugs = drugs;
          this.quarantine.wait40Days();
          this.medicalConditions = mapReportedPatientsToEntity(this.quarantine.report());
          this.history = [...this.history, {input: inputMedicalConditions, output: this.medicalConditions, drugs: this.drugs}]
          debugger;
      });


  };

  handleReset() {

      this.isDrugsAdministratedButtonDisabled = true;
      this.drugs = [] as string[];
      this.medicalConditions = [] as MedicalConditions[];

};

  constructor(private facadeService: FacadeService) { }

}
