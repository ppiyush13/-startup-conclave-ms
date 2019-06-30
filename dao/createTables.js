const execute = require('./execute')

/**
 * Utilities to create tables again in case we loss our schema / relations
*/

module.exports = async () => execute(pool => Promise.all(
        [
            `
                CREATE TABLE STARTUP (
                    NAME VARCHAR(100) PRIMARY KEY,
                    TYPE VARCHAR(100)
                )
            `,
            `
                CREATE TABLE POINT_OF_CONTACT (
                    STARTUP_NAME VARCHAR(100) REFERENCES STARTUP(NAME),
                    NAME VARCHAR(100) NOT NULL,
                    MOBILE CHAR(10),
                    LINKEDIN VARCHAR(400),
                    AVAILABLE BOOLEAN,
                    IN_TIME TIMESTAMPTZ,
                    UNIQUE(STARTUP_NAME, NAME)
                )
            `
        ]
        .map(query => pool.query(query))
    )
)