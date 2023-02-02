const express = require('express')
const router = express.Router()
const pool = require('../db.js')

router.get('/', (req, res, next) => {
    res.send('Obteniendo empleados')
})

router.post('/', (req, res, next) => {
    res.send('Creando empleados')
})

router.put('/', (req, res, next) => {
    res.send('Actualizando empleado')
})

router.delete('/', (req, res, next) => {
    res.send('Eliminado')
})


module.exports = router
