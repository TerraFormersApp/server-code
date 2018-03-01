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
	updatePlanet(id, planet){
	return database("planets").update(planet).where("id", id).returning("*").then(record => record[0]);
},
};
