const express = require('express')
const createTables = require('../dao/createTables')
const insertStartups = require('../dao/insert-startups')
const queryTable = require('../dao/queryTable')

const startupService = require('../service/startup')
const router = express.Router()

router
    .get('/', function(req, res) {
        res.send('/api working fine')
    })
    .get('/insert', async (req, res) => {
        const results = await insertStartups()
        res.send(results)
    })
    .get('/create', async (req, res) => {
        const results = await createTables()
        res.send(results)
    })
    .get('/make', async (req, res) => {
        const createResult = await createTables()
        const insertResult = await insertStartups() 
        res.send({createResult, insertResult})
    })
    .get('/query/:table', async (req, res) => {
        const table = req.params.table
        const results = await queryTable(table)
        if(results && results.rows)
            res.send(results.rows)
        else
            res.send({})
    })
    .get('/resetCache', async (req, res) => {
        startupService.resetCache()
        res.send('Done !!')
    })
    .get('/reset', async (req, res) => {
        const result = await startupService.resetAvailability()
        startupService.resetCache()
        res.send(result)
    })
    .get('/startups', async (req, res) => {
        const result  = await startupService.get()
        res.send(result)
    })
    .post('/startups', async (req, res) => {
        const result = await startupService.update(req.body)
        res.send(result)
    })

module.exports = router;