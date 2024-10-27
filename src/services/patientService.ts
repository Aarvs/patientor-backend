import {v4 as uuidv4} from "uuid";
import patientsData, { data } from "../../data/patients";

import { NewPatientEntry, NonSensitivePatientEntry, PatientEntry } from "../types";




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

const addPatients = (entry: NewPatientEntry): PatientEntry => {
    const newPatientEntry = {
        id: uuidv4(),
        ...entry
    };

    patientsData.push(newPatientEntry);
    console.log(patientsData);
    data.push(newPatientEntry);
    console.log(data);

    return newPatientEntry;
};

export default {
    getPatientsData,
    addPatients,
};