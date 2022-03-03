import express from 'express'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'

import videoRoutes from './routes/videos.routes'

const app = express()

app.set('port', config.PORT)

//Middleware
app.use(morgan('dev'));
app.use(cors()); // Permite que cualquier servidor haga peticiones.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use(videoRoutes);

export default app;