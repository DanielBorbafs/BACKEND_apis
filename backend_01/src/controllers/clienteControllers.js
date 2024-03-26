const clienteModel = require('../models/clienteModel');

const getAll = async(_req, res) => {
    const tasks = await clienteModel.getAll();
    return res.status(200).json(tasks)
}

module.exports = {
    getAll
}