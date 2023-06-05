

const getAllJobs = async (req, res) => {
   console.log(req.user);
}


const createJob  = async (req, res) => {
   res.send('createJob')
}

const getOneJob = async (req, res) => {
   res.send('getOneJob')
}


const deleteJob = async (req, res) => {
   res.send('delete job')
}


const updateJob = async (req, res) => {
   res.send('updateJob')
}


module.exports = {
   getAllJobs,
   createJob,
   getOneJob,
   deleteJob,
   updateJob
}