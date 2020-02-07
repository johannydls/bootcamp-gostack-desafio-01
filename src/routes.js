const { Router } = require('express');
const routes = new Router();

const ProjectController = require('./app/controllers/ProjectController');

const ExistingProjectMiddleware = require('./app/middlewares/existingProject');

routes.get('/projects', ProjectController.list);
routes.get('/projects/:id', ExistingProjectMiddleware, ProjectController.listOne);
routes.post('/projects', ProjectController.create);
routes.put('/projects/:id', ExistingProjectMiddleware, ProjectController.edit);
routes.delete('/projects/:id', ExistingProjectMiddleware, ProjectController.delete);
routes.post('/projects/:id/tasks', ExistingProjectMiddleware, ProjectController.insertTask);
routes.put('/projects/:idProject/tasks/:idTask', ProjectController.editTask);

module.exports = routes;