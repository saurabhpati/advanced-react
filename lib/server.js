import express from 'express';
import config from './config';
import serverRender from './renderers/server';
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (request, response) => {
    const initialContent = serverRender();
    response.render('index', { initialContent });   
});

app.listen(config.port, () => { console.info(`App is listening on port ${config.port}...`); });   