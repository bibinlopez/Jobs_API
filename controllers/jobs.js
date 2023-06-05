

const getAllJobs = async (req, res) => {
   res.send('getAllJobs')
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