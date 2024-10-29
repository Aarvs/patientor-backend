import { Gender } from "./types";
import {z} from "zod";

// Type Guard
// const isString = (text: unknown): text is string => {
//     return typeof text === 'string' || text instanceof String;
// };

// const isDate = (date: string): boolean => {
//     return Boolean(Date.parse(date));
// };

// const parseName = (name: unknown): string => {
//     if(!isString(name)){
//         throw new Error('Incorrect or missing name' + name);
//     }
//     return name;
// };

// const isGender = (gender: string): gender is Gender => {
//     return Object.values(Gender).map(g => g.toString()).includes(gender);
// };

// const parseDateOfBirth = (dateOfBirth: unknown): string => {
//     if(!isString(dateOfBirth) || !isDate(dateOfBirth)){
//         throw new Error('Incorrect or missing dateOfBirth:' + dateOfBirth);
//     }
//     return dateOfBirth;
// };

// const parseSsn = (ssn: unknown): string => {
//     if(!isString(ssn)){
//         throw new Error('Incorrect or missing ssn' + ssn);
//     }
//     return ssn;
// };

// const parseGender = (gender: unknown): string => {
//     if(!isString(gender) || !isGender(gender)){
//         throw new Error('Incorrect or missing gender' + gender);
//     }
//     return gender;
// };

// const parseOccupation = (occupation: unknown): string => {
//     if(!isString(occupation)){
//         throw new Error('Incorrect or missing occupation' + occupation);
//     }
//     return occupation;
// };

const newPatientSchema = z.object({
    name: z.string(),
    dateOfBirth: z.string(),
    ssn: z.string(),
    gender: z.nativeEnum(Gender),
    occupation: z.string()
});


// We can now get rid of this method altogether
// and just call the Zod-parser directly in the route handler
// export const toNewPatientEntry = (object: unknown): NewPatientEntry => {

//     if(!object || typeof object !== 'object'){
//         throw new Error('Incorrect or missing data');
//     }

//     return newPatientSchema.parse(object);

    // if('name' in object && 'dateOfBirth' in object && 'ssn' in object && 
    //     'gender' in object && 'occupation' in object){
        // const newEntry: NewPatientEntry = {
            // name: parseName(object.name),
            // dateOfBirth: parseDateOfBirth(object.dateOfBirth),
            // ssn: parseSsn(object.ssn),
            // gender: parseGender(object.gender),
            // occupation: parseOccupation(object.occupation),

            // name: z.string().parse(object.name),
            // dateOfBirth: z.string().date().parse(object.dateOfBirth),
            // ssn: z.string().parse(object.ssn),
            // gender: z.nativeEnum(Gender).parse(object.gender),
            // occupation: z.string().parse(object.occupation),

        // };
        // return newEntry;
    // }
    // throw new Error('Incorrect data! some fields are missing');
// };

export {newPatientSchema};