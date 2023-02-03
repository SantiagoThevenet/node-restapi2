const express = require('express')
const router = express.Router()
const { ping, home } = require('../controllers/index.controllers.js')

/* GET home page. */
router.get('/ping', ping)

router.get('/', home)


module.exports = router
