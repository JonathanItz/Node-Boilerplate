const express = require('express'),
      router = express.Router()

/* GET users listing. */
router.get( '/', (req, res, next) => {
    res.send( 'this is the about' )
})

module.exports = router
