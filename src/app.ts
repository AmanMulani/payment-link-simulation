import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import { genericMiddlewareHandler } from './middlewares';
import { healthCheck, paymentLink } from './routes';

/** Initialization */
const app = express();

/** Middleware */
app.use(bodyParser.json());

/** Security */
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());

/** Routes */
app.get('/healthCheck', healthCheck);
app.post('/paymentLink', paymentLink);

/** Generic Error Handler Middleware */
app.use(genericMiddlewareHandler);

export default app;
