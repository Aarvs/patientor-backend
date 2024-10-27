import express, {Response} from "express";

import { NonSensitivePatientEntry } from "../types";
import patientService from "../services/patientService";

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatientEntry[]>) => {
    res.send(patientService.getPatientsData());
});

export default router;