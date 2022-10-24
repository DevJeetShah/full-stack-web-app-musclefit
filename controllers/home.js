
const MealPlan = require('../models/MealPlan')


module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },

    getWelcome: async (req,res)=>{

        try{

            const mealPlanItems = await MealPlan.find({userId:req.user.id})
            console.log("below are the mean plan items being returned from MongoDB")
            console.log(mealPlanItems)
            res.render('welcome.ejs', {mealPlanItems: mealPlanItems, user: req.user})

        }catch(err){
            console.log(err)
        }
    }

}

