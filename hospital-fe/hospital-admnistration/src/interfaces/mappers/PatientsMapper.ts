import Patients from "../interfaces/Patients";

const baseObject = { F:0, H:0, D:0, T:0, X:0 };

const mapPatientsToEntity = (patients: string): Patients => {
    return patients.split(',').reduce((acc: any, patient: any) => {
        return {
            ...acc,
            [patient]: acc[patient] + 1
        }
    }, baseObject)
}

export default mapPatientsToEntity;