import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
import routes from './REST/routes';


const app = express();

app.use(express.static('public'));

routes(app);

app.listen(3000, function () {
  console.log('Server is running!');
});
