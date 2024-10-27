
import diaries from "../../data/entries";

import {NonSensitiveDiaryEntry,
DiaryEntry,
} from "../types";


const getEntries = (): DiaryEntry[] => {
    if(!diaries){
        throw new Error('Data not found!');
    };
    return diaries;
};

// const getNonSensitiveEntries = (): Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>[] => {
//     return diaries;
// }

// const getNonSensitiveEntries = (): Omit<DiaryEntry, 'comment'>[] => {
//     return diaries;
// }

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => ({
        id,
        date,
        weather,
        visibility,
    }));
};




const addDiary = () => {
    return null;
};

export default {
    getEntries,
    addDiary,
    getNonSensitiveEntries,
};