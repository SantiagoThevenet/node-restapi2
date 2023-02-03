const pool = require('../db.js')

const home = (req, res, next) => {
    res.send('<h1>Pagina Principal</h1>')
}

const ping = async (req, res, next) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    res.json(result[0])
}


module.exports = { ping, home }