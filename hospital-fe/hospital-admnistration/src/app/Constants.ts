export enum MedicalConditions {
    F = 'Fever',
    X = 'Dead',
    D = 'Diabetes',
    T = 'Tuberculosis',
    H = 'Healthy',
}

export enum Medication {
    An = 'Antibiotic',
    As = 'Aspirin',
    I = 'Insulin',
    P = 'Paracetamol',
}

export const ENDPOINTS = {
    DRUGS_API_ENDPOINT:"http://localhost:7200/drugs",
    PATIENTS_ENDPOINT: "http://localhost:7200/patients"
}

export const HISTORY_TABLE_HEADERS = ['Medical Condition', 'Patients Number']

export const HISTORY_DISPLAY_LIMIT = 10;