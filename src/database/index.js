const moment = require('moment-timezone');

class Database {
  constructor() {
    this.data = [];
    this.countID = 0;
  }

  initDatabase() {
    this.data = [];
  }

  getDatabase() {
    return this.data;
  }

  insertData(data) {
    const date = moment(new Date(Date.now())).tz("America/Sao_Paulo");
    data.created_at = date;
    data.updated_at = date;
    data.id = this.countID;
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
        return "ok";
      } 
    }
    return "not found";
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


}

module.exports = new Database();