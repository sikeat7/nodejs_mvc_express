const mongoose = require('mongoose');

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DATABASE = process.env.DB_DATABASE;

try {
    mongoose.Promise = global.Promise;
    const url = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin`;

    mongoose
      .connect(url, { useNewUrlParser: true })
      .then(() => {
        console.log("mongoDB is connected...");
      })
      .catch(err => {
        throw err;
      });
} catch (error) {
    throw new Error("Unable to connect to the database.");
}

module.exports = mongoose;