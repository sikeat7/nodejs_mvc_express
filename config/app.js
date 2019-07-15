module.exports = {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT || 27017,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,

    PORT: process.env.PORT || 3000,
    env: process.env.ENV || 'development',

    // Environment-dependent settings
    development: {
        db: {
            dialect: 'sqlite',
            storage: ':memory:'
        }
    },
    production: {
        db: {
            dialect: 'sqlite',
            storage: 'database/sqlite/sqlite.sqlite'
        }
    },

    JWT_SECRET: process.env.JWT_SECRET
}