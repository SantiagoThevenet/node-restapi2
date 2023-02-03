const express = require('express')
const router = express.Router()
const pool = require('../db.js')
const { getEmployees, createEmployees, deleteEmployees, updateEmployees } = require('../controllers/employees.controlers')


router.get('/', getEmployees)

router.post('/', createEmployees)

router.put('/', updateEmployees)

router.delete('/', deleteEmployees)


module.exports = router
