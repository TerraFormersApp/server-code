exports.up = function(knex, Promise) {
    return knex.schema.createTable("planets", (table) => {
        table.increments("id").primary();
        table.text("name");
        table.integer("water_percent");
        table.string("water_color");
				table.string("sky_color");
				table.boolean("mountains");
				table.boolean("trees");
				table.integer("land_percent");
				table.string("land_color");
				table.boolean("hurricane");
				table.boolean("wind");
				table.string("thumbnail_image")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("planets");
};
