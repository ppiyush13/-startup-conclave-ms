const express = require('express')
const Routes = require('./routes/routes')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 13130


app.use( bodyParser.json() ); 
app.get('/', (req, res) => res.send('Health Check'))
app.use('/api', Routes)
app.listen(PORT, () => console.log(`startup-conclave-ms listening on port ${PORT}!`))