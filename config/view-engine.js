import hbs from 'express-handlebars';

export const viewEngineSetup = (app) => {
    app.engine('hbs', hbs.engine({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');
    app.set('views', './src/views');
};