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
   const { email, password } = req.body

   if (!email || !password) {
      throw new BadRequestError('Please provide email and Password')
   }

   const user = await User.findOne({ email })

   const isPasswordCorrect = await user.comparePassword(password)

   if (!isPasswordCorrect) {
      throw new UnauthenticatedError('Invalid Credentials')
   }

   const token = user.createJWT()

   return res.status(StatusCodes.OK).json({ msg: 'Successfully logged In', user, token })
}


module.exports = { register, login }