//setup
const express = require('express')
const app = express()
const port = 3000
//import routing file and rules
const postsRouter = require('./routers/posts')
//handlers (middlewares)
const errorHandler = require('./middlewares/errorHandler')
const notFound = require('./middlewares/notFound')

//routing
app.get('/', (req, res) => {
    res.send('You are in the home page!')
})

//public assets
app.use(express.static('public'))

//using the router
app.use("/posts", postsRouter)


//error Handlers
app.use(notFound) //endpoint error
app.use(errorHandler) //server-side error

//start server - listening
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})