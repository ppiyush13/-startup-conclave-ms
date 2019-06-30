const execute = require('./execute')
const {getAvailableTime} = require('../utils')

class Startup {
    async getStartupDetails() {
        const {rows} = await execute(pool => {
            return pool.query(`
                SELECT * FROM STARTUP S, POINT_OF_CONTACT P
                where S.NAME = P.STARTUP_NAME
                order by S.NAME, P.NAME
            `)
        })
        return rows
    }

    async updateStartupDetails(records) {
        const values = records.map(({startup_name, name, available}) => 
            `('${startup_name}', '${name}', ${available}, ${getAvailableTime(available)})`
        ).join(' , ')

        return await execute(pool => {
            return pool.query(`
                UPDATE POINT_OF_CONTACT as P SET 
                    AVAILABLE = T.AVAILABLE,
                    IN_TIME = T.IN_TIME
                FROM (VALUES ${values}) as T(STARTUP_NAME, NAME, AVAILABLE, IN_TIME)
                WHERE
                    P.NAME = T.NAME AND
                    P.STARTUP_NAME = T.STARTUP_NAME
                RETURNING P.STARTUP_NAME, P.NAME, P.AVAILABLE, P.IN_TIME 
            `)
        })
    }

    async resetAvailability() {
        return await execute(pool => {
            return pool.query(`
                UPDATE POINT_OF_CONTACT as P SET 
                    AVAILABLE = false,
                    IN_TIME = TIMESTAMPTZ(null)
            `)
        })
    }
}

module.exports = new Startup()