// node and json modules

import express from "express";
import diaryRouter from './routes/diaries';
import diagnoseRouter from './routes/diagnoses';
import patientsRouter from './routes/patients';

const app = express();
import cors from 'cors';

app.use(express.json());
app.use(cors());



app.get('/api/ping', (_req, res) => {
    res.send("Everything is ping pong");
});

app.use('/api/diaries', diaryRouter);
app.use('/api/diagnoses', diagnoseRouter);
app.use('/api/patients', patientsRouter);

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});