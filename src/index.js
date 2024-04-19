const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { databaseConnection } = require('../config/database');
const { viewEngineSetup } = require('../config/view-engine');
const app = express();
const port = 3030;

app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('public'));
viewEngineSetup(app);
app.use(cors());
app.use(cookieParser());

databaseConnection()
    .then(() => {
        console.log(">>>>> Database connected successfully! <<<<<");
        app.listen(port, () => console.log(`>> * Server is working at: http://localhost:${port} * <<`));
    })
    .catch(err => {
        console.log('>>>>> Database connection error <<<<<');
        console.log('Error: ' + err.message);
    });