const Job = require('../models/Job')
const Errors = require('../errors')


const getAllJobs = async (req, res) => {
   const job = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
   if(job.length===0){
      throw new Errors.NotFoundError('no jobs found')
   }
   return res.status(200).json({ data: job, count: job.length })

}


const createJob  = async (req, res) => {
   console.log(req.user);
   req.body.createdBy = req.user.userId
   const job = new Job(req.body)
   const result = await job.save()

   return res.status(201).json({ result })
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