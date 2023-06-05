
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
router.get('/getonejob', getOneJob)
router.delete('/deletejob', deleteJob)
router.patch('/updatejob', updateJob)


module.exports = router

