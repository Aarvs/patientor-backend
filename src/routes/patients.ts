import express, {Response} from "express";
import {z} from "zod";

import { NonSensitivePatientEntry } from "../types";
import patientService from "../services/patientService";
import { newPatientSchema } from "../utils";

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatientEntry[]>) => {
    res.send(patientService.getPatientsData());
});


router.post('/', (req, res) => {
    try {
        // const newPatientEntry = toNewPatientEntry(req.body);
        const newPatientEntry = newPatientSchema.parse(req.body);
        const addedPatient = patientService.addPatients(newPatientEntry);
    
        res.json(addedPatient);
    } catch (error: unknown) {
        if(error instanceof z.ZodError){
            res.status(400). send({error: error.issues});
        } else {
            res.status(400).send({error: 'unknown error'});
        }
    }

});

export default router;