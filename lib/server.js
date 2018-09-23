import express from 'express';
import config from './config';
import serverRender from './renderers/server';
const app = express();
import { data } from './testData.json';

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (request, response) => {
    const initialContent = serverRender();
    response.render('index', { initialContent });
});

app.get('/data', (request, response) => {
    response.send(data);
});

app.listen(config.port, () => { console.info(`App is listening on port ${config.port}...`); });   