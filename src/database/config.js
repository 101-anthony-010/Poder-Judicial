const { Sequelize } = require('sequelize');
// const { Pool } = require('pg');

let db;

if (process.env.NODE_ENV === 'development') {
    db = new Sequelize({
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    })
}

module.exports = { db }