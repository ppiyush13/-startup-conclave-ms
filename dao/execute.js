const { Pool, Client } = require('pg')

module.exports = async cb => {
    const pool =  new Pool({
        ssl: true,
        connectionString: 'postgres://fqeuvsvvvpdejq:8c22a8a922f7ade979f401ffd75e20446418e5c8b1e079f0b07767b3f79f9f9b@ec2-50-19-221-38.compute-1.amazonaws.com:5432/d3fg1krasgm459',
    })
    try {
        return await cb(pool)
    }
    catch(ex) {
        console.log('Some exception occured !!', ex)
        return ex
    }
    finally {
        console.log('Pool relinquised')
        pool.end()
    }
}