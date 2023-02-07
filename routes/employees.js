const express = require('express')
const router = express.Router()
const pool = require('../db.js')
const { getEmployees, getEmployee, createEmployee, deleteEmployee, updateEmployee } = require('../controllers/employees.controlers')


router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployee)

router.patch('/employees/:id', updateEmployee)

router.delete('/employees', deleteEmployee)

router.delete('/employees/:id', deleteEmployee)


module.exports = router
