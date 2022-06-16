const User = require('../db/models/userSchema')
const create = async (req, res) => {
    const userDetails = req.body
    try {
        const newUser = await User.create(userDetails)
        res.json(newUser)
    } catch (error) {
        res.json(error.message)
    }
}
// await User.update({ lastName: "Doe" }, {
//     where: {
//       lastName: null
//     }
// });
const update = async (req, res) => {
    const userDetails = req.body
    try {
        const updatedResult = await User.update(userDetails, {
            where: {
                user_id: userDetails.user_id
            }
        })
        res.json(updatedResult)
    } catch (err) {
        res.json(err.message)
    }
}
const remove = async (req, res) => {
    const userDetails = req.body
    try{
        const deletedResult = await User.destroy({
            where:{
                user_id:userDetails.user_id
            }
        })
        res.json(deletedResult)
    }catch(err){
        res.json(err.message)
    } 
}

const read = async (req, res) => {
   const users = await User.findAll()
   res.json(users)
}


module.exports = {
    create,
    update,
    remove,
    read
}
