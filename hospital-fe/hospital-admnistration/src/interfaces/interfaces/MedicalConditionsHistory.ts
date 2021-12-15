import { MedicalConditions } from "./MedicalConditions";

export interface MedicalConditionHistory {
    input: MedicalConditions[]
    output: MedicalConditions[];
    medicationDate: Date,
    medication: string[];
}