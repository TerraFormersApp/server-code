const database = require("./database-connection");

module.exports = {
  listPlanets(){
    return database("planets");
  },
  readPlanet(id){
    return database("planets").where("id", id).first();
  },
  createPlanet(planet){
    return database("planets").insert(planet).returning("*").then(record => record[0]);
  },
  deletePlanet(id){
    return database("planets").delete().where("id", id);
  },
  updatePlanet(id, newName){
    return database("planets").where("id", id).update(newName).returning("*").then(record => record[0]);
  },
};
