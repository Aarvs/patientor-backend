import patientsData from "../../data/patients";

import { NonSensitivePatientEntry } from "../types";




const getPatientsData = (): NonSensitivePatientEntry[] => {
    console.log(patientsData);
    return patientsData.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

export default {getPatientsData};