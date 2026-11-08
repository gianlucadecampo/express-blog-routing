const express = require('express')
const router = express.Router()

//routing
router.get('/', (req, res) => {
    res.send('you request GET (index)')
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Show the item with id:${id}`)
})

router.post('/', (req, res) => {
    res.send('you request POST (create)')
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Update the item with id ${id}`)
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.send(`Delete the item with id ${id}`)
})

//export
module.exports = router