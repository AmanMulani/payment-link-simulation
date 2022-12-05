import bodyParser from 'body-parser';
import express from 'express';
import { Request, Response, NextFunction } from "express"
import helmet from 'helmet';
import { healthCheck } from './routes/healthCheck';
import { paymentLink } from './routes/paymentLink';

const app = express();

/** Middleware */
app.use(bodyParser.json());

/** Security */
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());

/** Routes */
app.get('/healthCheck', healthCheck);

app.post('/paymentLink', paymentLink)

export default app;
