const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const sanitizer = require('perfect-express-sanitizer');

//Utils functions

//Controller functions

//Routes funtions
const userRoutes = require('./routes/user.route');
const productRoutes = require('./routes/product.route');

const app = express();
const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 80 * 1000,
    message: 'Rate limit exceeded'
});

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(
    sanitizer.clean({
        xss: true,
        noSql: true,
        sql: false,
    })
);

if (process.env.NODE_ENV === 'develoment') {
    app.use(morgan('dev'));
}

//Rutas de peticiones limitadas
app.use('/api/v1', limiter);

//Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/product', productRoutes);

// app.all('*', (req, res, next) => 
//     next( new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
// )

//app.use(globalErrorHandler)
module.exports = app;