const startupDao = require('../dao/startup')

class Startup {
    cache = null
    cacheMap = null
    async get() {
        try {
            if(this.cache) {
                console.log('cache hit !!')
            }
            else {
                console.log('cache miss !!')
                const rows = await startupDao.getStartupDetails()
                this.updateCache(rows)
            }
            return this.cache
        }
        catch(ex) {
            throw ex
        }
    }

    async update(records) {
        try {
            const {rows} = await startupDao.updateStartupDetails(records)
            if(this.cacheMap) {
                rows.forEach(({startup_name, name, available, in_time}) => {
                    const node = this.cacheMap[`${startup_name}_${name}`]
                    node.available = available
                    node.in_time = in_time
                })
                return this.updateCache(Object.values(this.cacheMap))
            }
            else {
                return this.get()
            }
        }
        catch(ex) {
            throw ex
        }
    }

    updateCache(rows) {
        this.cacheMap = {}
        const rowsMap = rows.reduce((acc, cur) => {
            const {startup_name, website, ...poc} = cur
            if(!acc[startup_name]) acc[startup_name] = {
                startup_name, website, poc: []
            }
            acc[startup_name].poc.push(poc)
            this.cacheMap[`${startup_name}_${poc.name}`] = cur
            return acc
        }, {})

        this.cache = Object.values(rowsMap)
        return this.cache
    }

    resetCache() {
        this.cache = null
        this.cacheMap = null
    }

    resetAvailability() {
        return startupDao.resetAvailability()
    }
}

module.exports = new Startup()