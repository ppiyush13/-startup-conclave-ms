const execute = require('./execute')
const startupList = require('./startupData')

const createStartupUpsertQuery = ({name, webSite}) => `
    INSERT INTO STARTUP (NAME, WEBSITE)
    VALUES (${s(name)}, ${s(webSite)})
    ON CONFLICT (NAME)
    DO UPDATE SET
    WEBSITE = ${s(webSite)}
`

const createStartupPOCUpsert = ({name: startupName, poc}) => {
    return poc.map(({name, contact, linkedin, available = false}) => `
        INSERT INTO POINT_OF_CONTACT (STARTUP_NAME, NAME, MOBILE, LINKEDIN, AVAILABLE, IN_TIME)
        VALUES (${s(startupName)}, ${s(name)}, ${s(contact)}, ${s(linkedin)}, ${available}, ${getAvailableTime(available)})
        ON CONFLICT (STARTUP_NAME, NAME)
        DO UPDATE SET
        NAME = ${s(name)},
        MOBILE = ${s(contact)},
        LINKEDIN = ${s(linkedin)},
        AVAILABLE = ${available},
        IN_TIME = ${getAvailableTime(available)};
    `).join(' ; ')
}

const s = str => str ? `'${str}'` : null
const getAvailableTime = available => available ? s(new Date().toISOString()) : null
const joinQueries = queries => queries.join(' ; ')

module.exports = async () => execute(pool => pool.query(`
    ${
        joinQueries(
            [createStartupUpsertQuery, createStartupPOCUpsert]
                .map(fn => 
                    joinQueries(startupList.map(fn)
                )
            )
        )
    }
`))