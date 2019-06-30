const execute = require('./execute')

const startupList = [
    {
        name: 'techforce',
        poc: [
            {
                available: true,
                name: 'Vijay Navaluri',
                contact: '9876543210',
                linkedin: 'https://www.linkedin.com/in/navaluri/'
            }
        ]
    },
    {
        name: 'haptik',
        poc: [
            {
                available: true,
                name: 'Swapan Rajdev',
                contact: '9876543210',
                linkedin: 'https://www.linkedin.com/in/swapan-rajdev-64a0591a/'
            }
        ]
    },
    {
        name: 'cateina',
        poc: [
            {
                name: 'Sanachit Mehra',
                contact: '9876543210',
                linkedin: 'https://www.linkedin.com/in/sanachit-mehra-a8147418/'
            }
        ]
    },
    {
        name: 'smokescreen',
        poc: [
            {
                name: 'Raviraj Doshi',
                contact: '9876543210',
                linkedin: 'https://www.linkedin.com/in/raviraj-doshi-a6513615/'
            }
        ]
    },
    {
        name: 'vphrase',
        poc: [
            {
                name: 'Neerav Parekh',
                contact: '9876543210',
                linkedin: 'https://www.linkedin.com/in/neeravparekh/'
            }
        ]
    }
]

const createStartupUpsertQuery = ({name, type}) => `
    INSERT INTO STARTUP (NAME)
    VALUES (${s(name)})
    ON CONFLICT (NAME)
    DO UPDATE SET
    TYPE = ${s(type)}
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
    `)
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