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
   const job = await Job.findOne({ createdBy: req.user.userId, _id: req.params.id }).populate('createdBy')
   if (!job) {
      throw new Errors.NotFoundError('no Jobs found in this id')
   }
   return res.status(200).json({ data: job })
}


const deleteJob = async (req, res) => {
   const job = await Job.findOneAndRemove({ createdBy: req.user.userId, _id: req.params.id })
   if (!job) {
      throw new Errors.NotFoundError('no Jobs found in this id')
   }
   return res.status(200).send()
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