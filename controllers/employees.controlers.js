const { pool } = require("../db.js")


const getEmployees = async (req, res, next) => {
    const [rows] = await pool.promise().query('SELECT * FROM employee')
    res.send(rows)
}


const getEmployee = async (req, res) => {
    const [rows] = await pool.promise().query("SELECT * FROM employee WHERE id = ?", [req.params.id])
    if (rows.length <= 0) {
        return res.status(404).json({
            message: "Employee not found"
        }
        )
    }
    res.json(rows[0])
}

const createEmployee = async (req, res, next) => {
    const { name, salary } = req.body
    const [rows] = await pool.promise().query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

const updateEmployee = async(req, res, next) => {
    const { id } = req.params
    const { name, salary } = req.body

    const [result] = await pool.promise().query("UPDATE employee SET name=IFNULL(?,name), salary=IFNULL(?,salary) where id = ?",[name,salary,id])

    console.log(id, name, salary);

    if (result.affectedRows === 0) {
        message: "Employee not found"
    }

    const [rows] = await pool.promise().query("SELECT * FROM employee WHERE id = ?", [id])

    res.json(rows[0])
}

const deleteEmployee = async (req, res, next) => {
    const [result] = await pool.promise().query("DELETE  FROM employee WHERE id = ?", [req.params.id])

    if (result.affectedRows <= 0) {
        return res.status(404).json({
            message: "Employee not found"
        }
        )
    }
    res.sendSatuts(204)
}

module.exports = { getEmployees, getEmployee, createEmployee, deleteEmployee, updateEmployee }