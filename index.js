const express = require('express')
const Routes = require('./routes/routes')
const bodyParser = require('body-parser')

const app = express()
const port = 13130

app.use( bodyParser.json() ); 
app.get('/', (req, res) => res.send('Health Check'))
app.use('/api', Routes)
app.listen(port, () => console.log(`startup-conclave-ms listening on port ${port}!`))