import { Component, OnInit } from '@angular/core';
import {PatientsService} from "../../../../services/patients.service";
import {DrugsService} from "../../../../services/drugs.service";
import {Quarantine} from "hospital-lib";

const baseObject = { F:0, H:0, D:0, T:0, X:0 };

function getFormattedPatients(patients: any) {
    const set = new Set();
    return patients.split(',').reduce((acc: any, patient: any) => {
      if (!set.has(patient)) {
        set.add(patient);
        return {
          ...acc,
          [patient]: 1,
        }
      }
      return {
        ...acc,
        [patient]: acc[patient] + 1
      }
    }, baseObject)
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quarantine: any;
  drugs: any = [];
  medicalConditions: any = [];
  history: any = [];

  handlePatientsClick() {
    this.patientsService.getPatients().subscribe((patients: any ) => {

      this.quarantine = new Quarantine(getFormattedPatients(patients));
      this.history = [{input: this.quarantine.report()}, ...this.history, ];

      const reportedPatients = this.quarantine.report();
      debugger;
      this.medicalConditions = Object.keys(reportedPatients).map((key: string) => {
        debugger;
        return {
         medicalCondition: key,
         numberOfPatients: reportedPatients[key],
        }
      })
    });

    this.drugsService.getDrugs().subscribe((drugs: any) => {
      this.quarantine.setDrugs(drugs.split(','));
    })
  };

  handleAdministrateDrugsToPatients() {
   this.quarantine.wait40Days();
   const reportedPatients = this.quarantine.report();

   // const [firstOccurrence] = this.history;
    // this.history = [{...firstOccurrence, output: reportedPatients}, ...this.history];
    debugger;
    this.medicalConditions = Object.keys(reportedPatients).map((key: string) => {
      return {
        medicalCondition: key,
        numberOfPatients: reportedPatients[key],
      }
    })
  }

  constructor(private patientsService: PatientsService, private drugsService: DrugsService) { }


  ngOnInit(): void {
  }

}
