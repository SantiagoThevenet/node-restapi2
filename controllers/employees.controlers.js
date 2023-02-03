const { pool } = require("../db.js")


const getEmployees = async(req, res, next) => {
    const [rows] = await pool.promise().query('SELECT * FROM employee')
    res.send(rows)
}

const createEmployees = async (req, res, next) => {
    const { name, salary } = req.body
    const [rows] = await pool.promise().query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

const updateEmployees = (req, res, next) => {
    res.send('Actualizando empleado')
}

const deleteEmployees = (req, res, next) => {
    res.send('Eliminado empleado')
}

module.exports = { getEmployees, createEmployees, deleteEmployees, updateEmployees }