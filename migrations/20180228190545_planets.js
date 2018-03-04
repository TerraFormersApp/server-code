exports.up = function(knex, Promise) {
    return knex.schema.createTable("planets", (table) => {
        table.increments("id").primary();
        table.text("name");
				table.string("planet_description")
				table.string("planet_image", 2048)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("planets");
};

//comment for git recognition
