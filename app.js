//setup
const express = require('express')
const app = express()
const port = 3000
//import routing file and rules
const postsRouter = require('./routers/posts')

//routing
app.get('/', (req, res) => {
    res.send('You are in the home page!')
})

//public assets
app.use(express.static('public'))

//using the router
app.use("/posts", postsRouter)

//start server - listening
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})