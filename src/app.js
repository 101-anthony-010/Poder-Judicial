//Midleware
const express = require('express');
const path = require('path');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const sanitizer = require('perfect-express-sanitizer');

//Utils
const AppError = require('./utils/appError');

//Rutas
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const productRoutes = require('./routes/product.route');
const asignationRoutes = require('./routes/asignation.route');
const marcaRoutes = require('./routes/marca.route');
const modelProductRoutes = require('./routes/modelProduct.route');
const dependenciaRoutes = require('./routes/dependencia.route');
const cargoRoutes = require('./routes/cargo.route');
const sedeRoutes = require('./routes/sede.route');

const app = express();
const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 80 * 1000,
    message: 'Rate limit exceeded'
});

// Configuración de middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(hpp());
app.use(
    sanitizer.clean({
        xss: true,
        noSql: true,
        sql: false,
    })
);

app.use(cors());
// Configuración específica de CORS
// const corsOptions = {
//   origin: '*',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };


//Directorio publico
app.use(express.static('public'))

// Rutas de peticiones limitadas
app.use('/api/v1', limiter);

// Rutas
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/asignation', asignationRoutes);
app.use('/api/v1/marca', marcaRoutes);
app.use('/api/v1/modelProduct', modelProductRoutes);
app.use('/api/v1/dependencia', dependenciaRoutes);
app.use('/api/v1/sede', sedeRoutes);
app.use('/api/v1/cargo', cargoRoutes);

// Ruta genérica para manejar todas las demás solicitudes y servir el HTML principal del frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.all('*', (req, res, next) => 
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
);

module.exports = app;
