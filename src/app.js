const express = require('express');
const routes = require('./routes');
const Database = require('./database');

class App {
  constructor() {
    this.server = express();
    Database.initDatabase();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/api', routes);
  }
}

module.exports = new App().server;