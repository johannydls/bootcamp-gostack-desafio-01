const moment = require('moment-timezone');

class Database {
  constructor() {
    this.data = [];
    this.countID = 0;
    this.countIDTask = 0;
    const logDate = moment(new Date(Date.now())).tz("America/Sao_Paulo").format("DD-MM-YYYY HH:mm:ss");
    console.log(`[${logDate}] Database successfully connected`);
  }

  initDatabase() {
    this.data = [];
  }

  getDatabase() {
    return this.data;
  }

  insertData(data) {
    const date = moment(new Date(Date.now())).tz("America/Sao_Paulo");
    data.id = this.countID;
    data.created_at = date;
    data.updated_at = date;
    this.data.push(data);
    this.countID += 1;
  }

  updateDatabase(data) {
    this.data = data;
  }

  findById(id) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === Number(id)) {
        return this.data[i];
      } 
    }
    return null;
  }

  findByIdAndRemove(id) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === Number(id)) {
        this.data.splice(i, 1);
        return true;
      } 
    }
    return false;
  }

  findByIdAndUpdate(id, data) {
    const newTitle = data.title;
    const date = moment(new Date(Date.now())).tz("America/Sao_Paulo");
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === Number(id)) {
        this.data[i].title = newTitle;
        this.data[i].updated_at = date;
        return this.data[i];
      } 
    }
    return null;
  }

  insertTask(id, data) {
    const date = moment(new Date(Date.now())).tz("America/Sao_Paulo");
    const task = {
      id: this.countIDTask,
      title: data.title,
      finished: data.finished
    }
    
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === Number(id)) {
        this.data[i].tasks.push(task);
        this.data[i].updated_at = date;
        this.countIDTask += 1;
        return true;
      }
    }
    return false;
  }

  editTask(idProject, idTask, data) {
    const date = moment(new Date(Date.now())).tz("America/Sao_Paulo");
    const newTitle = data.title;
    const newStatus = data.finished;

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === Number(idProject)) {
        for (let j = 0; j < this.data[i].tasks.length; j++) {
          if (this.data[i].tasks[j].id === Number(idTask)) {
            if (newTitle) this.data[i].tasks[j].title = newTitle;
            if (newStatus) this.data[i].tasks[j].finished = newStatus;
            this.data[i].updated_at = date;
            return true;
          }
        }
      }
    }
    return false;
  }


}

module.exports = new Database();