const express = require("express");
const router = express.Router();
const jobControllers = require("../controllers/jobControllers");

router.post("/createJob", jobControllers.createJob);
router.get("/jobs", jobControllers.fetchJob);
router.put("/updateJob", jobControllers.updateJob);
router.delete("/deleteJob/:id", jobControllers.deleteJob);

module.exports = router;
