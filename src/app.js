const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const sanitizer = require('perfect-express-sanitizer');

// Utils functions
const AppError = require('./utils/appError');

// Controller functions

// Routes functions
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

app.use(express.json());

// Configuración específica de CORS
// const corsOptions = {
//     origin: 'http://localhost:3000', // Cambia esto al origen correcto de tu cliente
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// };

app.use(cors({ origin: '*'}));
app.use(helmet());
app.use(hpp());
app.use(
    sanitizer.clean({
        xss: true,
        noSql: true,
        sql: false,
    })
);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Servir archivos estáticos desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, '../dist')));

// Rutas de peticiones limitadas
app.use('/api/v1', limiter);

// Routes
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
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Configuración de HTTPS con certificado y clave privada
// const privateKey = fs.readFileSync(path.join(__dirname, '..', 'private-key.key'), 'utf8'); // Ruta a tu archivo de clave privada
// const certificate = fs.readFileSync(path.join(__dirname, '..', 'cert.pem'), 'utf8'); // Ruta a tu archivo de certificado
// const credentials = { key: privateKey, cert: certificate };

// const httpsServer = https.createServer(credentials, app);

// // Escuchar en el puerto HTTPS (por ejemplo, 443)
// httpsServer.listen(443, () => {
//     console.log('Servidor HTTPS iniciado en el puerto 443');
// });

// // Middleware para manejar errores 404 (ruta no encontrada)
// app.use((req, res, next) => {
//     next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

// // Middleware global para manejar errores
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({
//         status: 'error',
//         message: 'Something went wrong!',
//     });
// });

module.exports = app;
