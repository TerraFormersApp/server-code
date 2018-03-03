exports.seed = function(knex, Promise) {
  return knex("planets").del()
    .then(function () {
      return knex("planets").insert([
				{
					id: 1,
					name: "Vulcan",
					planet_description: "The home of Spock - Live Long and Prosper",
					planet_image: "somelink.com for an image of our planet"
				}
      ]);
    })
    .then (() => {
        return knex.raw("ALTER SEQUENCE planets_id_seq RESTART WITH 2;")
    })
};
