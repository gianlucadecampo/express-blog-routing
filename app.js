//setup
const express = require('express')
const app = express()
const port = 3000

//routing
app.get('/', (req, res) => {
    res.send('You are in the home page!')
})

//start server - listening
app.listen(port, () => {
})
console.log(`app listening on port ${port}`)