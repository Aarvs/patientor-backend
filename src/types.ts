import {z} from "zod";
import { newPatientSchema } from "./utils";

export type Weather = 'sunny' | 'rainy' | 'cloudy'| 'stormy'| 'windy';

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

export type DiagnosisEntry = {
    code: string;
    name: string;
    latin?: string;
};

export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn'>;

// export interface PatientEntry {
//     id: string, 
//     name: string,
//     dateOfBirth: string,
//     ssn: string,
//     gender: Gender,
//     occupation: string,
// };


// export type NewPatientEntry = Omit<PatientEntry, 'id'>;
export type NewPatientEntry = z.infer<typeof newPatientSchema>;

export interface PatientEntry extends NewPatientEntry {
    id: string,
};

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
}