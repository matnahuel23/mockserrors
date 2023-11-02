const { generateUser } = require ("../../utils.js")
const UserDTO = require ("../dtos/userDTOS.js")

getUsers = async (req, res) => {
    let user = []
    for (let i = 0; i < 50; i++) {
        user.push(generateUser())
    }

    res.send({ status: "success", payload: user })
}

createUser = async (req, res) => {
    const users = []    
    try {
            let { first_name, last_name, sex, email, job} = req.body;
            let user = new UserDTO({first_name, last_name, sex, email, job})
            if (!first_name || !last_name || !sex || !email || !job) {
                return res.status(400).send({ status: "error", error: 'Todos los campos obligatorios deben ser proporcionados.' });
            }
            let result = users.push(user)
            res.send({ result: "success", payload: result });
    } catch (error) {
            res.status(500).send({ status: "error", error: 'Error al agregar el usuario. Detalles: ' + error.message });
    }
}

module.exports = { getUsers, createUser }