const Job = require('../models/Job')
const Errors = require('../errors')


const getAllJobs = async (req, res) => {
   console.log(req.user);
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