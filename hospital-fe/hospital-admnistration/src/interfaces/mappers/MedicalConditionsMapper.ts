import {MedicalConditions} from "../interfaces/MedicalConditions";
import Patients from "../interfaces/Patients";

const mapReportedPatientsToEntity = (reportedPatients: Patients): MedicalConditions[] => {
   return  Object.keys(reportedPatients).map((key: string) => {
        return {
            medicalCondition: key,
            numberOfPatients: reportedPatients[key],
        }
    })
}

export default mapReportedPatientsToEntity;