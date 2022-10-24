const MealPlan = require('../models/MealPlan')

module.exports = {

    getMealPlan: async (req,res)=>{
        console.log(req.user)
        try{
            const mealPlanItems = await MealPlan.find({userId:req.user.id})
            console.log("below are the mean plan items being returned from MongoDB")
            console.log(mealPlanItems)
            res.render('mymealplan.ejs', {mealPlanItems: mealPlanItems, user: req.user})
        }catch(err){
            console.log(err)
        }



    },
        createMealPlan: async (req, res)=>{

            console.log("below are items being submitted on the form")
            console.log(req.body)


        if(typeof (req.body.mealType) === 'string'){

            try{

                        await MealPlan.create({

                            mealType: req.body.mealType, 
                            mealName: req.body.mealName, 
                            calories: req.body.calories,  
                            totalProtein: req.body.totalProtein, 
                            totalCarbs: req.body.totalCarbs, 
                            totalFat: req.body.totalFat, 
                            userId: req.user.id
                    
                        })

                console.log('meal plan items have been added!')
                res.redirect('/mymealplan')

            }

            catch(err){
                console.log(err)
            }

            } else {

                try{

                    for(let i=0; i< req.body.mealType.length; i++){


                        await MealPlan.create({

                            mealType: req.body.mealType[i], 
                            mealName: req.body.mealName[i], 
                            calories: req.body.calories[i],  
                            totalProtein: req.body.totalProtein[i], 
                            totalCarbs: req.body.totalCarbs[i], 
                            totalFat: req.body.totalFat[i], 
                            userId: req.user.id
                    
                        })

                    }


                console.log('meal plan items have been added!')
                res.redirect('/mymealplan')

            }

            catch(err){
                console.log(err)
            }

        }
    },


    

    getMealPlanEditor: async (req,res)=>{
        console.log(req.user)
        try{
            const mealPlanItems = await MealPlan.find({userId:req.user.id})
            console.log("below are the mean plan items for the editor")
            console.log(mealPlanItems)
            res.render('editmealplan.ejs', {mealPlanItems: mealPlanItems, user: req.user})
        }catch(err){
            console.log(err)
        }

    },

    editMealPlan: async (req, res) => {

   

        console.log("Below are the edited items from the table received by the server:")
        console.log(req.body)

        console.log("Logging the array length info for mymealplan controller editMealPlan function ")

        console.log(req.body.allMealPlanItemsfromJSFile.length)

        const ObjectId = require('mongoose').Types.ObjectId;



        try {



            for(let i=0; i<req.body.allMealPlanItemsfromJSFile.length; i++){
            
                await MealPlan.findOneAndUpdate(
                    { _id: ObjectId(req.body.allMealPlanItemsfromJSFile[i].rowId)},
                    
                    {
                        mealType: req.body.allMealPlanItemsfromJSFile[i].mealType, 
                        mealName: req.body.allMealPlanItemsfromJSFile[i].mealName, 
                        calories: req.body.allMealPlanItemsfromJSFile[i].calories,  
                        totalProtein: req.body.allMealPlanItemsfromJSFile[i].totalProtein, 
                        totalCarbs: req.body.allMealPlanItemsfromJSFile[i].totalCarbs, 
                        totalFat: req.body.allMealPlanItemsfromJSFile[i].totalFat, 
                        
                    }

                    );
                    

           }


            
           res.json('Edit was successful')


        }catch(err){
            console.log(err)
        } 

    },

    deleteMealPlan: async (req,res)=>{
        console.log(req.user)
        try{
            await MealPlan.deleteMany({userId:req.user.id})
            console.log("Meal Plan deleted!")
            res.redirect('/welcome')

        }catch(err){
            console.log(err)
        }


    }


}    