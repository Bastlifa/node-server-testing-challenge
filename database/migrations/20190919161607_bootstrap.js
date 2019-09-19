
exports.up = function(knex) {
    return knex.schema.createTable('spells', tbl =>
    {
        tbl.increments()
        tbl.string('name', 128).unique().notNullable()
        tbl.string('description', 512)
        tbl.string('subject', 128)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('spells')
};
