import {PatientsRegister} from './patientsRegister';

enum Drugs {
    Paracetamol = 'P',
    Aspirin = 'As',
    Antibiotic = 'An',
    Insulin = 'I',
}

export class Quarantine {
    private patients: PatientsRegister;
    private drugs: string[];
    private static readonly NOT_IMPLEMENTED_MESSAGE = 'Work, work.';

    constructor(patients: PatientsRegister) {
        this.patients = patients;
    }

    public setDrugs(drugs: Array<string>): void {
        this.drugs = drugs;
    }

    public wait40Days(): void {
        const drugsSet = new Set(this.drugs || []);
        const hasDeadlyDrugsCombination = drugsSet.has(Drugs.Paracetamol) && drugsSet.has(Drugs.Aspirin);
        let updatedObject: PatientsRegister = {F: 0, H: 0, D: 0, T: 0, X: 0} as PatientsRegister;

        if (hasDeadlyDrugsCombination) {
            this.patients = this.getUpdatedStageWithDeadlyCombination();
        } else {
            Object.keys(this.patients).forEach((item: string) => {
                if (item === 'H' && drugsSet.has(Drugs.Insulin) && drugsSet.has(Drugs.Antibiotic)){
                    updatedObject = {
                        ...updatedObject,
                        F: updatedObject['F'] + this.patients['H'],
                    }
                } else if (item === 'T' && drugsSet.has(Drugs.Antibiotic)) {
                    updatedObject = {
                        ...updatedObject,
                        H: updatedObject['H'] + this.patients['T'],
                    }
                } else if (item === 'F' && (drugsSet.has(Drugs.Paracetamol) || drugsSet.has(Drugs.Aspirin))) {
                    updatedObject = {
                        ...updatedObject,
                        H: updatedObject['H']+ this.patients['F'],
                    }
                } else if (item === 'D' && !drugsSet.has(Drugs.Insulin)) {
                    updatedObject = {
                        ...updatedObject,
                        X: updatedObject['X'] + this.patients['D'],
                    }
                } else {
                    updatedObject = {
                        ...updatedObject,
                        [item]: updatedObject[item] + this.patients[item],
                    }
                }
            })
            this.patients = updatedObject;
        }
    }

    private getUpdatedStageWithDeadlyCombination(): PatientsRegister {
        const totalCount: number = Object.keys(this.patients).reduce((acc: number, item: string) => {
            return acc + this.patients[item];
        }, 0);

        return {
            F: 0,
            H: 0,
            D: 0,
            T: 0,
            X: totalCount,
        }

    }

    public report(): PatientsRegister {
        return this.patients;
    }
}
