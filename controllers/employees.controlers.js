const getEmployees = (req, res, next) => {
    res.send('Obteniendo empleados')
}

const createEmployees = (req, res, next) => {
    res.send('Creando empleados')
}

const updateEmployees = (req, res, next) => {
    res.send('Actualizando empleado')
}

const deleteEmployees = (req, res, next) => {
    res.send('Eliminado empleado')
}

module.exports = { getEmployees, createEmployees, deleteEmployees, updateEmployees }