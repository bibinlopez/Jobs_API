const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const User = require('../models/User')

const register = async (req, res) => {

   const user1 = new User(req.body)
   const user = await user1.save()

   const token = user.createJWT()

   return res.status(StatusCodes.CREATED).json({ msg: 'User Created', user, token })

}


const login = async (req, res) => {
   res.send('login ')
}


module.exports = { register, login }