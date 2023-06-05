


const register = async (req, res) => {
   const {name,email,password} = req.body
   
}


const login = async (req, res) => {
   res.send('login')
}


module.exports = { register, login }