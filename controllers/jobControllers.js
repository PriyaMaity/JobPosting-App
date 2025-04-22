const jobModel = require("../models/jobModels");

const createJob = async (req, res) => {
  try {
    let jobObj = req.body;
    await jobModel.create(jobObj);
    res.status(200).json({
      success: true,
      message: "Job Created Succesfully",
    });
  } catch (err) {
    console.log("Error in creating Job");
  }
};

const fetchJob = async (req, res) => {
  try {
    let filteredObjs = req.query || {};
    const jobLists = await jobModel.find(filteredObjs);

    res.status(200).json({
      success: true,
      message: "Job List fetched Succesfully",
      data: jobLists,
    });
  } catch (err) {
    console.log("Error while fetching Job", err);
  }
};

const updateJob = async (req, res) => {
  try {
    let id = req.query.id;
    let toUpdateJobs = req.body;
    let updatedJob = await jobModel.findByIdAndUpdate(id, toUpdateJobs);
    res.status(200).json({
      success: true,
      message: "Job updated Succesfully",
      data: updatedJob,
    });
  } catch (err) {
    console.log("Error while updating the Job");
  }
};

const deleteJob = async (req, res) => {
  try {
    let jobId = req.params.id;
    await jobModel.findByIdAndDelete(jobId);
    res.status(200).json({
      success: true,
      message: "Job deleted Succesfully",
    });
  } catch (err) {
    console.log("Error in deleting the Job", err);
  }
};

module.exports = { createJob, fetchJob, updateJob, deleteJob };
