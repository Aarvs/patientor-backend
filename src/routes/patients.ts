import express, {Request ,Response} from "express";

import { NewPatientEntry, NonSensitivePatientEntry, PatientEntry } from "../types";
import patientService from "../services/patientService";
// import { newPatientSchema } from "../utils";
import { errorMiddleware, newPatientParser } from "../middleware";

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatientEntry[]>) => {
    res.send(patientService.getPatientsData());
});


router.post('/', newPatientParser, (req: Request<unknown, unknown, NewPatientEntry>,
    res: Response<PatientEntry>
) => {
        // const newPatientEntry = newPatientSchema.parse(req.body);
        // const addedPatient = patientService.addPatients(newPatientEntry);
        const addedPatient = patientService.addPatients(req.body);
    
        res.json(addedPatient);
    });

router.use(errorMiddleware);

export default router;