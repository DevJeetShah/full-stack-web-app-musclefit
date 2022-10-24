const express = require("express");
const router = express.Router();

const { ensureAuth, ensureGuest } = require("../middleware/auth");
const workoutLogController = require("../controllers/myworkoutlog");



router.get("/", ensureAuth, workoutLogController.getMyWorkoutLog)

router.post("/post", workoutLogController.postMyWorkoutLog)

router.get("/delete/:id", ensureAuth, workoutLogController.deleteMyWorkoutLog)

module.exports = router;
