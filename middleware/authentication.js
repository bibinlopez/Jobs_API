
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const authMiddleware = async (req, res, next) => {
   const authHeader = req.headers.authorization

   if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthenticatedError('No token found')
   }

   const token = authHeader.split(' ')[1]

   try {
      const decoded = await jwt.verify(token, process.env.JWT)

      req.user = { decoded }
      next()
   } catch (error) {
      throw new UnauthenticatedError('Not authorize to access this route')
   }

}


module.exports = authMiddleware