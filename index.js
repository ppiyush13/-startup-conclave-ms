const express = require('express')
const Routes = require('./routes/routes')
const bodyParser = require('body-parser')
var cors = require('cors')


const app = express()
const PORT = process.env.PORT || 13130

app.use(cors())
app.use( bodyParser.json() ); 
app.get('/', (req, res) => res.send('Health Check'))
app.use('/api', Routes)
app.listen(PORT, () => console.log(`startup-conclave-ms listening on port ${PORT}!`))