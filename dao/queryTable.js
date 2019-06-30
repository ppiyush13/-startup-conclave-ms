const execute = require('./execute')

/**
 * Utilities to create tables again in case we need to recreate tables 
*/

module.exports = async (table) => await execute(pool => pool.query(`select * from ${table}`))