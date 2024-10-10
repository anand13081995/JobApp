const express = require("express");
const allJobController = require("../controller/jobController")

const router = express.Router();


router.post("/api/jobs", allJobController.createJob);

router.get("/api/jobs", allJobController.listJob);

router.put("/api/jobs/:id", allJobController.updateJob);

router.delete("/api/jobs/:id", allJobController.deleteJob);

module.exports = router;