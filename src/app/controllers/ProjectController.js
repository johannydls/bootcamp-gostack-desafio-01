const Database = require('../../database');
const moment = require('moment-timezone');

class ProjectController {

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
      return res.status(200).send({ message: Database.findByIdAndRemove(id) });
    } catch (error) {
      
    }
  }

}

module.exports = new ProjectController();