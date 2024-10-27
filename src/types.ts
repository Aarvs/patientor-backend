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

export type PatientEntry = {
    id: string, 
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string,
};

export type NewPatientEntry = Omit<PatientEntry, 'id'>;

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}