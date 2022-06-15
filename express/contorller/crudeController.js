const create = async(req, res)=>{
    res.send('This is add route')
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