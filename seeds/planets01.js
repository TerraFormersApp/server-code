exports.seed = function(knex, Promise) {
  return knex("planets").del()
    .then(function () {
      return knex("planets").insert([
				{
					id: 1,
					name: "Vulcan",
					water_percent: 34,
					water_color: "#EEE685",
					sky_color: "#CAE1FF",
					mountains: false,
					trees: false,
					land_percent: 66,
					land_color: "#FF6103",
					hurricane: true,
					wind: false,
					thumbnail_image: "somelink.com"
				}
      ]);
    })
    .then (() => {
        return knex.raw("ALTER SEQUENCE planets_id_seq RESTART WITH 2;")
    })
};
