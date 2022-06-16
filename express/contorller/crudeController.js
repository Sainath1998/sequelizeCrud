const User = require('../db/models/userSchema')
const create = async(req, res)=>{
    const userDetails = req.body
    try {
        const newUser = await User.create(userDetails)
        res.json(newUser)
    } catch (error) {
        res.json(error.message)
    }
}

const update = async(req, res)=>[
    res.send('This is update route')
]

const remove = async(req, res)=>{
    res.send('This is delete route')
}

const read = async(req, res)=>{
    res.send('This is read route')
}


module.exports = {
    create,
    update,
    remove,
    read
}