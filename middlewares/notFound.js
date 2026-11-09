function notFound(req, res, next) {
    res.status(404)
    res.json({
        error: 'Not Found',
        message: 'Wrong endpoint (maybe a typo?!)'
    })
}
module.exports = notFound