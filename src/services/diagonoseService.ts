import diagnoseEntry from "../../data/diagnosis";

import { DiagnosisEntry } from "../types";



const getDiagnosisEntries = (): DiagnosisEntry[] => {
    return diagnoseEntry;
};

export default {getDiagnosisEntries};