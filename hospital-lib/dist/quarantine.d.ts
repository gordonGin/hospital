import { PatientsRegister } from './patientsRegister';
export declare class Quarantine {
    private patients;
    private drugs;
    private static readonly NOT_IMPLEMENTED_MESSAGE;
    constructor(patients: PatientsRegister);
    setDrugs(drugs: Array<string>): void;
    wait40Days(): void;
    private getUpdatedStageWithDeadlyCombination;
    report(): PatientsRegister;
}
