const Database = require('../../database');

class ProjectController {

  insertTask(req, res) {
    try {
      const body = {
        title: req.body.title,
        finished: req.body.finished || false
      }
      return res.status(200).send({ success: true, inserted: Database.insertTask(req.params.id, body) });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Task not inserted" });
    }
  }

  editTask(req, res) {
    try {
      const idProject = req.params.idProject;
      const idTask = req.params.idTask;
      const body = {
        title: req.body.title,
        finished: req.body.finished || false
      };
      return res.status(200).send({ success: true, edited: Database.editTask(idProject, idTask, body) });
    } catch (error) {
      return res.status(400).send({ error: "Task not edited" });
    }
  }

  list(req, res) {
    try {
      return res.status(200).send(Database.getDatabase());
    } catch (error) {
      console.log(error);
      return res.status(400).send({ message: 'Error on load database' });
    }
  }

  create(req, res) {
    try {
      
      const body = {
        title: req.body.title,
        tasks: []
      }
  
      Database.insertData(body);
  
      return res.status(200).send({ message: 'Project added successfully', data: Database.getDatabase() });
    } catch (error) {
      console.log(error);
      return res.status(400).send({ message: 'Error on add new project' });
    }
  }

  listOne(req, res) {
    try {
      const id = req.params.id;
      return res.status(200).send(Database.findById(id));
    } catch (error) {
      console.log(error);
      return res.status(400).send({ message: 'Error on load database' });
    }
  }

  edit(req, res) {
    try {
      const id = req.params.id;
      return res.status(200).send(Database.findByIdAndUpdate(id, req.body));
    } catch (error) {
      console.log(error);
      return res.status(400).send({ message: 'Error on edit' });
    }
  }

  delete(req, res) {
    try {
      const id = req.params.id;
      return res.status(200).send({ success: Database.findByIdAndRemove(id) });
    } catch (error) {
      
    }
  }

}

module.exports = new ProjectController();