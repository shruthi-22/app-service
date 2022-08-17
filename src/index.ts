import express, {Express, Request, Response} from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import {router} from './routers/books';

const app: Express = express();
const port = 3000;

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/books', router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
