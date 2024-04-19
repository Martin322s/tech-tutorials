import express from 'express';
import hbs from 'express-handlebars';
import { databaseConnection } from '../constants/database';
import cors from 'cors';
const app = express();
const port = 3030;

app.use(cors());

initializeDatabase()
    .then(() => {
        console.log(">>>>> Database connected successfully! <<<<<");
        app.listen(port, () => console.log(`>> * Server is working at: http://localhost:${port} * <<`));
    })
    .catch(err => {
        console.log('>>>>> Database connection error <<<<<');
        console.log('Error: ' + err.message);
    });