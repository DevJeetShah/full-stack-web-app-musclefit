const express = require("express");
const router = express.Router();

const { ensureAuth, ensureGuest } = require("../middleware/auth");
const mealPlanController = require("../controllers/mymealplan");



router.get("/", ensureAuth, mealPlanController.getMealPlan)

router.get("/editor", ensureAuth, mealPlanController.getMealPlanEditor)

router.put("/edit", mealPlanController.editMealPlan)

router.post("/create", mealPlanController.createMealPlan);

router.get("/delete", mealPlanController.deleteMealPlan);


module.exports = router;
