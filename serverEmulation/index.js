//imports
const express = require( 'express')
const path = require('path')
const cors = require( 'cors')

const app = express();
app.use(cors())

// Routes
app.get('/financeCalculator', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), '/serverEmulation/cdn/financeCalculator.csv'))
})

async function start() {
    const PORT = 5000;

    app.listen(PORT, () => console.log(`App has been started on ${PORT}`))
}

start().then()
