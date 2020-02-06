const { Router } = require('express');
const routes = new Router();

const ProjectController = require('./app/controllers/ProjectController');

routes.get('/projects', ProjectController.list);
routes.get('/projects/:id', ProjectController.listOne);
routes.post('/projects', ProjectController.create);
routes.put('/projects/:id', ProjectController.edit);
routes.delete('/projects/:id', ProjectController.delete);

module.exports = routes;