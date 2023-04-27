// Import database
let users = require('./database/db') 

const express = require('express')
const app = express()

app.listen(5500, () => console.log('Running on port 5500'))

//Middleware
app.use(express.json())

//GET & POST
app.route('/api')
.get((req, res) => res.status(200).json({users}))
.post((req, res) => {
    const userId = users.length + 1

    const {id = userId, ...rest} = req.body
    users.push({id, ...rest})

    res.status(201).json("User Saved")
})

// Route Params (GET,PUT,DELETE)
app.route('/api/:id')
.get((req, res) => {
    const userId = req.params.id
    const index = userId - 1
    const user = users[index]

    if (!user) {
        return res.status(404).json("User Not Found")
    }
    
    res.status(200).json(user)
})
.put((req, res) => {
    const index = req.params.id - 1
    let user = users[index]

    if (!user) {
        return res.status(404).json("User Not Found")
    }

    const {id=user.id, ...rest} = req.body

    users[index] = {id, ...rest}

    res.status(200).json("User Updated")
})
.delete((req, res) => {
    const userId = req.params.id
    const userExist = users.find(user => Number(user.id) === Number(userId))

    if(!userExist) {
        return res.status(404).json("User Not Found")
    }

    users = users.filter(user => Number(user.id) !== Number(userId))

    res.status(200).json("User Deleted")
})
