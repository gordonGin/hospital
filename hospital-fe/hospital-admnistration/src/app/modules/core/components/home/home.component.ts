import {Component} from '@angular/core';
import {Quarantine} from "hospital-lib";
import {FacadeService} from "../../../../services/facade-service.service";
import mapReportedPatientsToEntity from "../../../../../interfaces/mappers/MedicalConditionsMapper";
import Patients from "../../../../../interfaces/interfaces/Patients";
import {MedicalConditions} from "../../../../../interfaces/interfaces/MedicalConditions";
import {FormGroup} from "@angular/forms";
import {HISTORY_DISPLAY_LIMIT} from "../../../../Constants";
import {MedicalConditionHistory} from "../../../../../interfaces/interfaces/MedicalConditionsHistory";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    quarantine: Quarantine = {} as Quarantine;
    medication: string[] = [] as string[];
    medicalConditions: MedicalConditions[] = [] as MedicalConditions[];
    history: MedicalConditionHistory[] = [] as MedicalConditionHistory[];
    isDrugsAdministratedButtonDisabled: boolean = true;
    enableManualMode: boolean = false;

    constructor(private facadeService: FacadeService) {
    };

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

        this.facadeService.getDrugs().subscribe((drugs) => {
            const inputMedicalConditions = [...this.medicalConditions]
            this.quarantine.setDrugs(drugs)
            this.medication = drugs;
            this.quarantine.wait40Days();
            this.medicalConditions = mapReportedPatientsToEntity(this.quarantine.report());
            this.history = this.getUpdatedHistory(inputMedicalConditions);
        });
    };

    handleReset() {
        this.isDrugsAdministratedButtonDisabled = true;
        this.medication = [] as string[];
        this.medicalConditions = [] as MedicalConditions[];
        this.enableManualMode = false;
    };

    isToggleEnabled(isChecked: any) {
        this.enableManualMode = isChecked;
    };

    handleSubmitForm(event: FormGroup = {} as FormGroup) {
        this.isDrugsAdministratedButtonDisabled = false;

        const {medication, ...patientsCount} = event.value;

        this.quarantine = new Quarantine(patientsCount);
        this.medicalConditions = mapReportedPatientsToEntity(this.quarantine.report());
        this.quarantine.setDrugs(medication);
    };

    private getUpdatedHistory(inputMedicalConditions: MedicalConditions[]) {
        let history: MedicalConditionHistory[] = [{
            input: inputMedicalConditions,
            output: this.medicalConditions,
            medication: this.medication,
            medicationDate: new Date()
        }];
        
        if (this.history.length === HISTORY_DISPLAY_LIMIT) {
            this.history.pop();
            const updatedHistory = [...this.history];
            return [...history, ...updatedHistory]
        }

        return [...history, ...this.history];
    }
}
