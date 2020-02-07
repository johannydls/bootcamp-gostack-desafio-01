const Database = require('../../database');

module.exports = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({ error: 'ExistingProjectError', message: 'No id provided' });
  }

  const project = Database.getDatabase().find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'ExistingProjectError', message: 'Project not found' });
  }

  return next();

}