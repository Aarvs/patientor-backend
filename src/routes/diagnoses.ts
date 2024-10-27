import express, {Response} from "express";
import { DiagnosisEntry } from "../types";
import diagonosesService from "../services/diagonoseService";
// import getDiagnosisEntries from "../services/diagonoseService";

const router = express.Router();

router.get('/', (_req, res: Response<DiagnosisEntry[]>) => {
    res.send(diagonosesService.getDiagnosisEntries());
});

export default router;
