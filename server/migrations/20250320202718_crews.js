/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('crews', table => {
    table.increments();
    table.integer('crew_id');
    table.string('crew_name');
    table.string('position_name');
    table.date('start_date');
    table.date('end_date');
    table.integer('member_id');
    table.foreign('member_id').references('id').inTable('members').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('crews', table => {
    table.dropForeign('member_id');
  }).then(() => {
    return knex.schema.dropTable('crews');
  });
};

