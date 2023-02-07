const { pool } = require("../db.js")


const getEmployees = async (req, res, next) => {
    // throw new Error("Mi error")
    const [rows] = await pool.promise().query('SELECT * FROM employee')
    res.send(rows)
    try {
    } catch (error) {
        return res.status(500).json({
            message: "Something was wrong!"
        })
    }
}


const getEmployee = async (req, res) => {
    try {
        if (rows.length <= 0) {
            return res.status(404).json({
                message: "Employee not found"
            }
            )
        }
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Something was wrong!"
        })
    }
    const [rows] = await pool.promise().query("SELECT * FROM employee WHERE id = ?", [req.params.id])
}

const createEmployee = async (req, res, next) => {

    try {

        const { name, salary } = req.body
        const [rows] = await pool.promise().query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something was wrong!"
        })
    }
}

const updateEmployee = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, salary } = req.body

        const [result] = await pool.promise().query("UPDATE employee SET name=IFNULL(?,name), salary=IFNULL(?,salary) where id = ?", [name, salary, id])

        console.log(id, name, salary);

        if (result.affectedRows === 0) {
            message: "Employee not found"
        }

        const [rows] = await pool.promise().query("SELECT * FROM employee WHERE id = ?", [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Something was wrong!"
        })
    }
}

const deleteEmployee = async (req, res, next) => {
    try {
        const [result] = await pool.promise().query("DELETE  FROM employee WHERE id = ?", [req.params.id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: "Employee not found"
            }
            )
        }
        res.sendSatuts(204)
    } catch (error) {
        return res.status(500).json({
            message: "Something was wrong!"
        })
    }
}

module.exports = { getEmployees, getEmployee, createEmployee, deleteEmployee, updateEmployee }