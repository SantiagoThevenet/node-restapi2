const express = require('express')
const router = express.Router()
const pool = require('../db.js')

/* GET home page. */
router.get('/ping', async (req, res, next) => {
  const [result] = await pool.query('SELECT 1 + 1 AS result')
  res.json(result[0])
})

router.get('/', (req, res, next) => {
  res.send('<h1> :)</h1>')
})

router.get('/employee', (req, res, next) => {
  res.send('Obteniendo empleados')
})
router.post('/employee', (req, res, next) => {
  res.send('Creando empleados')
})
router.put('/employee', (req, res, next) => {
  res.send('Actualizando empleado')
})
router.delete('/employee', (req, res, next) => {
  res.send('Eliminado')
})

module.exports = router
