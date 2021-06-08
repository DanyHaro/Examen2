import express from 'express'
import morgan from 'morgan'
import ventasRoutes from './routes/ventas.routes'
import detalleRoutes from './routes/detalle.routes'

import usuarioRoutes from './routes/usuario.routes'
import rolRoutes from './routes/rol.routes'





const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

// app.get('/',function(req, res, next){
//     res.send('Welcome to Node.JS...!');
// });

app.use('/ventas', ventasRoutes);
app.use('/detalle', detalleRoutes);

app.use('/usuario', usuarioRoutes);
app.use('/rol', rolRoutes);

export default app;