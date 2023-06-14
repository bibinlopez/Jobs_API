
const express = require('express')
const router = express.Router()


const {
   getAllJobs,
   createJob,
   getOneJob,
   deleteJob,
   updateJob } = require('../controllers/jobs')

router.get('/getalljobs', getAllJobs)
router.post('/createjob', createJob)
router.get('/getonejob/:id', getOneJob)
router.delete('/deletejob/:id', deleteJob)
router.patch('/updatejob/:id', updateJob)


module.exports = router

